const locations = require('./locations');

module.exports = {
    /*
        Create a dict of teamWins:teamNames
            i.e. all teams with x wins [3: [team1, team2, etc]]
        Sort by teamWins and update team's standings
    */
    calculateStandings: function() {
        const fs = require('fs');
        var file = require(locations.TEAM_DATA_EXT);
        var teams = [];
        for(a in file) {
            teams.push(file[a])
        }
        teams.sort((a,b) => { return b.wins - a.wins});

        //set first team to be in first place because we need to access previous team in for loop
        teams[0].standing = 1;
        
        var standingPlace = 1;
        for (var i = 1; i < teams.length; i++) {
            if (teams[i].wins < teams[i - 1].wins) {
                standingPlace++;
                teams[i].standing = standingPlace;
                continue;
            }
            //this team is tied in wins with the previous team
            teams[i].standing = standingPlace;
        }

        //write to team_data file
        fs.writeFile(locations.TEAM_DATA_EXT, JSON.stringify(file, null, 2), function (err) {
            if (err) return console.log(err);
        });
    }
}