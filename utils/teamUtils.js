const mongoose = require('mongoose');
const Team = mongoose.model('teams');
module.exports = {
    /*
        Sort by team wins and update team's standings
    */
    calculateStandings: async function() {
        let teams = await this.getTeamObject();
        if (!teams) return;
        teams.sort((a,b) => { return b.wins - a.wins });
        
        //set first team to be in first place because we need to access previous team in for loop
        teams[0].standing = 1;
        
        let standingPlace = 1;
        for (let i = 1; i < teams.length; i++) {
            if (teams[i].wins < teams[i - 1].wins) {
                standingPlace++;
                teams[i].standing = standingPlace;
            }
            //this team is tied in wins with the previous team
            else {
                teams[i].standing = standingPlace;
            }
            Team.findOneAndUpdate(
                {_id: teams[i]._id},
                {standing: teams[i].standing}  
            );
        }
        return teams;
    },
    /*
        Return object containing all teams
    */
    getTeamObject: async function()  {
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
        this.writeTeamToDB(newTeam);
        return;
    },

    /*
        Check if the country name is in use
    */
    isCountryAvail: async function(countryName) {
        let team = await Team.findOne({teamName: countryName});
        return team;
    },

    deleteTeam: async function(id) {
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