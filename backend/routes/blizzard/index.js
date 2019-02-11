import Blizzard from './api/blizzard';

/**
 * Initialize Blizzard 
 * @param {Object} args 
 * @param {String} region - Our Region - Default = "us"
 * @param {String} locale - Our lang and Country - Default = "en_US"
 * @param {String} key - Our Blizzard API ID
 * @param {String} secret - Our Blizzard API secret
 * @param {String} token - Will be undefined until we request the access token
 */
function initialize ({region, locale, key, secret, token }) {
    return new Blizzard({ region, locale, key, secret, token });
}

export default initialize;
