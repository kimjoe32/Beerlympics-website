import React, { Component } from 'react';
import '../css/App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import DisplayAllTeamsData from '../containers/displayAllTeamsData';
import AddTeam from '../containers/formContainers/addTeam';

class App extends Component {
  render() {
    return (
      <div className="App white">
        <BrowserRouter>
					<div className="container">
						<Route exact path="/" component={DisplayAllTeamsData}/>
            <Route path="/add_team" component={AddTeam}/>
					</div>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;