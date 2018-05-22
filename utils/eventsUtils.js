const locations = require('./locations');
const fs = require('fs');

module.exports = {
    getEventsObject: function() {
        const filesize=fs.statSync(locations.EVENTS_EXT).size;
        let events = [];

        if (filesize > 0) {
            let data = JSON.parse(fs.readFileSync(locations.EVENTS_EXT, 'utf8'));

            for(a in data) {
                events.push(data[a])
            }
        }
        return events;
    }
}