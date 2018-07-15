const locations = require('./locations');
const fs = require('fs');
const mongoose = require('mongoose');
const Team = mongoose.model('teams');
module.exports = {
    /*
        Sort by team wins and update team's standings
    */
    calculateStandings: function(teams) {
        if (teams) return;
        
        teams.sort((a,b) => { return b.wins - a.wins });
        
        //set first team to be in first place because we need to access previous team in for loop
        teams[0].standing = 1;
        
        let standingPlace = 1;
        for (let i = 1; i < teams.length; i++) {
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
        fs.writeFileSync(locations.TEAM_DATA_EXT, JSON.stringify(newFile, null, 2), function (err) {
            if (err) return err;
        });
    },

    /*
        Return object containing all teams
    */
    getTeamObject: async function()  {
        // const filesize=fs.statSync(locations.TEAM_DATA_EXT).size;
        // let teams = [];
        // if file not empty, add teams to teams array
        // if (filesize > 0) {
        //     let data = JSON.parse(fs.readFileSync(locations.TEAM_DATA_EXT, 'utf8'));

        //     for(a in data) {
        //         teams.push(data[a])
        //     }
        // }
        
        let teams = await Team.find(function(err, results) {
            if(err) console.log(err);
            return results;
        });
        
        return teams;
    },

    /*
        Add team to data file
    */
    addTeam: async function(teamInfo) {        
        // only for QA testing, team input form should have async validation
        if (!this.isCountryAvail(teamInfo.country) && !teamInfo.isEditing) {
            console.log('teamName taken');
            return 'country is taken'; 
        }
        const captainName = teamInfo.firstName + ' ' + teamInfo.lastName;
        newTeam = {
            "teamName": teamInfo.country,
            "teamMembers": teamInfo.teamMembers,
            "wins": 0,
            "losses": 0,
            "standing": 0,
            "captainInfo": {
                "captainName": captainName,
                "captainEmail": teamInfo.email,
                "captainPhone": teamInfo.phone
            }
        };

        //delete old team (if editing a team) and insert new team
        if (teamInfo.isEditing && teamInfo.id) {
            await this.deleteTeam(teamInfo.id);
        }
        teams.push(newTeam);
        this.writeTeamToDB(newTeam);
        // this.writeToTeamDataFile(teams);
        return;
    },

    /*
        Check if the country name is in use
    */
    isCountryAvail: async function(countryName) {
        const teams = await this.getTeamObject();
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].teamName === countryName) {
                return false;
            }
        }
        return true;
    },

    isTeamFileEmpty: function() {
        
    },

    deleteTeam: async function(id) {
        const teams = await this.getTeamObject();
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].id === id) {
                // console.log('deleting team', teams[i].teamName)
                teams.splice(i, 1);
            }
        }
        let deletedTeam = await Team.findOneAndRemove({
            _id: id
        });
        return deletedTeam;
    },
    
    /*
        Create new team schema and push to mongo
    */
    writeTeamToDB: function(teamData) {
        new Team(teamData).save();
    }
}