const iso3311a2 = require('iso-3166-1-alpha-2');
module.exports = {
    /*
        Return object with all countries = {Afghanistan, Albania, ...}
    */
    getCountriesObj() {
        const countriesArray = iso3311a2.getCountries();
        const _ = require('lodash');
        const countriesMap= _.fromPairs(countriesArray.map(input => [input, null]));
        return countriesMap;
    },
    /*
        Like getCountriesObj but as an array
    */
    getCountriesArr() {
        const countriesArray = iso3311a2.getCountries();
        return countriesArray;
    },

    /*
        Return iso country code. Or default to zimbabwe if bad country name
        No reason for Zimbabwe as default
    */
    getCode(country) {
        return iso3311a2.getCode(country) || iso3311a2.getCode('Zimbabwe');
    }
}