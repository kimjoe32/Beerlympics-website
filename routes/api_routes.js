/*
  Use for specific routes
  If react component makes API call for local data:
  module.exports = app => {
    app.get('/api/some_api_call', async (req, res) => {
      const data = await require('../local_folder/local_file');
      res.send(data);
    });
  }
*/
const utils_standings = require('../utils/standings');
const utils_locations = require('../utils/locations');

module.exports = app => {
  /*
    Return json file containing team states
  */
  app.get('/api/getTeamData', async (req, res) => {
    utils_standings.calculateStandings();
    const data = await require(utils_locations.TEAM_DATA);
    res.json(data);
  });

  /*
    Client posted a team to save
  */
  app.post('/api/addNewTeam', async (req, res) => {
    console.log(req.body);
  });
}