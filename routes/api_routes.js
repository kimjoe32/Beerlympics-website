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
const utils_team = require('../utils/teamUtils');
const utils_locations = require('../utils/locations');
const utils_events = require('../utils/eventsUtils');

module.exports = app => {
  /*
    Return json file containing team states
  */
  app.get('/api/getTeamData', async (req, res) => {
    let data = await utils_team.getTeamObject();
    utils_team.calculateStandings(data);
    
    res.json(data);
  });

  /*
    Client posted a team to save
  */
  app.post('/api/addNewTeam', (req, res) => {
    const err = utils_team.addTeam(req.body);
    if (!err) {
      res.send('Successfully submitted a team');
    } else {
      res.send(err);
    }
  });
  
  /*
    Get a list of events (contains name and results)
  */
  app.get('/api/getEvents', async(req, res) => {
    let data = await utils_events.getEventsObject();
    res.json(data);
  });

  /* 
    User requested to start game.
    If we can start game, return success, and event schedule
  */
  app.get('/api/startGame', async (req, res) => {

    res.send('Success');  
  });

  app.post('/api/isCountryAvail', async(req, res) => {
    const taken = utils_team.isCountryAvail(req.body.country);
    console.log(req.body.country, taken);
    res.send(taken);
  });
}