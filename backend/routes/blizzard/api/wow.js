
/**
 * All of the WOW API get requests live here
 */
export default class Wow {
    constructor(blizzard) {
        this.blizzard = blizzard; // Our current instance of Blizzard

        // this.testing(); // For testing api calls
    }

    /**
     * [Urls to display profile image](https://us.battle.net/forums/en/bnet/topic/20752136188#post-1)
     * 
     * @param {Array} field_params - MUST BE A STRING
     *  - This can be a single item or an array that is converted to a string. Format = 'items,mounts'
     *  - Field types can be found on the BNET doc site 
     *  - [Character Profile API](https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api)
     * @param {Object} args 
     */
    getCharacter(field_params, { realm, character }) {
        const params = {
            fields: field_params.length 
                ? field_params.toString() 
                : 'profile',
        }

        this.blizzard.makeRequest(`/wow/character/${realm}/${character}`, { params })
    }


    /**
     * @param {Array} field_params - MUST BE A STRING
     *  - This can be a single item or an array that is converted to a string. Format = 'items,mounts'
     *  - Field types can be found on the BNET doc site 
     *   - [Guild Profile API](https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api)
     * @param {Object} args 
     */
    getGuild(field_params, { realm, guildName }) {
        const params = {
            fields: field_params.length 
                ? field_params.toString() 
                : 'profile',
        }

        this.blizzard.makeRequest(`/wow/guild/${realm}/${guildName}`, { params })
    }

    /**
     * 
     * @param {Object} object Contains the realm we want to get auction data from
     * @return {Object} That contains url to a JSON object for auction house data
     */
    getAuctionData({ realm }) {
        return this.blizzard.makeRequest(`/wow/auction/data/${realm}`)
    }

    /**
     * 
     * @param {Object} args 
     * @param {String} args.id - If look for a specific boss include an id, else don't pass anything
     */
    getBoss({ id = '' }) {
        return this.blizzard.makeRequest(`/wow/boss/${id}`);
    }

    /**
     * @param {Object} args
     * @param {String} args.id - This will get an item by the item id - Only use if were not searching for a set
     * @param {String} args.set - If searching for a set this needs to be set to true in the object we pass
     * @param {String} args.setID - If set is true then we need a set id for the search
     */
    getItem({ id = '', set = false, setID = ''}) {
        const url = set ? `/wow/item/set/${setID}` : `/wow/item/${id}`;

        return this.blizzard.makeRequest(url);
    }

    /**
     * Request to get all of the mounts in the game
     */
    getMount() {
        return this.blizzard.makeRequest(`/wow/mount/`);
    }

    /**
     * Request to see if the realms are online or "active"
     */
    getRealmStatus() {
        return this.blizzard.makeRequest(`/wow/realm/status`)
    }

    /**
     * 
     * @param {Object} args
     * @param {String} args.bracket - Bracket must be equal to '2v2' or '3v3'
     */
    getPvpLeaderboards({ bracket }) {

        return this.blizzard.makeRequest(`/wow/leaderboard/${bracket}`);
    }
    
    /**
     * @param {Object} args
     * @param {String} args.zoneID - Contains the zone id if we want to make a request for a specific zone.
     * - To request all zones don't include a zone id
     */
    getZone({ zoneID = '' }) {
        return this.blizzard.makeRequest(`/wow/zone/${zoneID}`)
    }

    /**
     * Request to get the current price of the WoW Token
     */
    getWowToken() {
        // This should be dynamic at somepoint
        const params = {
            namespace: 'dynamic-us'
        }
        return this.blizzard.makeRequest(`/data/wow/token/index`, { params } )
    }

    /**
     * These are test cases for our API calls
     */
    testing() {

        // //Char test
        // const charData = {
        //     realm: 'frostmane',
        //     guildName: 'unbreakable',
        // }
        // const charParams = ['items','pvp']
        // this.getCharacter(charParams, charData);


        // // Guild Test
        // const guildData = {
        //     realm: 'frostmane',
        //     guildName: 'unbreakable',
        // }
        // const guildParams = []
        // this.getGuild(guildParams, guildData);

        // Auction  test
        // const auctionData = {
        //     realm: 'frostmane',
        // }
        // this.getAuctionData(auctionData);

        // Boss  test
        // const bossDataAll = {}
        // const bossData = {
        //     id: 24723,
        // }
        // this.getBoss(bossDataAll);

        // Item  test
        // const itemData = {
        //     id: 18803
        // }
        // const itemSetData = {
        //     set: true,
        //     setId: 1060
        // }
        // this.getItem(itemSetData);

        // Mount  test
        // this.mount();

        // Realm status test
        // this.getRealmStatus();

        // PVP test
        // const pvpData = {
        //     bracket: '2v2',
        // }
        // this.getPvpLeaderboards(pvpData);

        // Zone test
        // const zoneDataAll = {}
        // const zoneData = {
        //     id: 4131,
        // }
        // this.getZone(zoneDataAll);
        
        // Wow token test
        // this.getWowToken();

    }

}