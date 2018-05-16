const locations = require('./locations');

module.exports = {
    /*
        Sort by team wins and update team's standings
    */
    calculateStandings: function() {
        var teams = this.getTeamObject();
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

        this.writeToTeamDataFile(teams);
    },

    /*
        Write to team_data file
    */
    writeToTeamDataFile: function(newFile) {
        const fs = require('fs');
        fs.writeFile(locations.TEAM_DATA_EXT, JSON.stringify(newFile, null, 2), function (err) {
            if (err) return err;
        });
    },

    /*
        Object containing all teams
    */
    getTeamObject: function() {
        var file = require(locations.TEAM_DATA_EXT);
        var teams = [];
        for(a in file) {
            teams.push(file[a])
        }
        return teams;
    },

    /*
        Add team to data file
    */
    addTeam: function(teamInfo) {
        var teams = this.getTeamObject();
        
        teams.push({
            "teamName": teamInfo.country,
            "teamMembers": teamInfo.teamMembers,
            "wins": 0,
            "losses": 0,
            "standing": 0
        });
        return this.writeToTeamDataFile(teams);
    }
}