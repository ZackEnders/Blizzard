import axios from 'axios';

// API IMPORTS
import Wow from './wow';

export default class Blizzard {
    constructor(args) {
        const { region, locale, key, secret, token } = args;

        this.defaults = {
            region,
            locale,
            key,
            secret,
            token,
        };
        
        this.bindEvents();
    }

    /**
     * Make a get request to the Blizzard API
     * @param {String} url 
     * @param {Object} args 
     */
    makeRequest(url, args = {}) {
        const { region, token, locale } = this.defaults; // Region should be made be an arg in the future
        const { params } = args;

        return axios(`https://${region}.api.blizzard.com${url}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            params: {
                ...params,
                locale: locale
            },
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    /**
     * Request Access Token from Battle.net
     */
    getAccessToken() {
        const { region, key, secret } = this.defaults;
        
        return axios(`https://${region}.battle.net/oauth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            auth: {
                username: key,
                password: secret,
            },
            params: {
                grant_type: 'client_credentials',
            },
        }).then(res => {
            console.log("res ", res.data);
            return this.defaults.token = res.data.access_token
        }).catch(err => {
            console.error(err);
        })
    }

    /**
     * Validate Access Token
     */
    validateToken() {
        const { region, token } = this.defaults;
        
        return axios(`https://${region}.battle.net/oauth/check_token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            params: {
                token: token,
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            if (err.response.data.error ) {
                this.getAccessToken();
            }
            // console.log(err.response.data.error)
        })
    }

    loadGameAPIs() {
        // Create wow instance
        this.wow = new Wow(this);
    }

    bindEvents() {
        this.getAccessToken().then(res => {
            this.validateToken();
            this.loadGameAPIs();
        });
    }

}