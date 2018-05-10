module.exports = {
    getCountriesObj() {
        const iso3311a2 = require('iso-3166-1-alpha-2');
        const countriesArray = iso3311a2.getCountries();
        const _ = require('lodash');
        const countriesMap= _.fromPairs(countriesArray.map(input => [input, null]));
        return countriesMap;
    },
    getCountriesArr() {
        const iso3311a2 = require('iso-3166-1-alpha-2');
        const countriesArray = iso3311a2.getCountries();
        return countriesArray;
    }
}