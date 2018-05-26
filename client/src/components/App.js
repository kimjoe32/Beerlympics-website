import React, { Component } from 'react';
import '../css/App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import DisplayAllData from './displayAllData';
import StartGame from '../containers/startGame';
import AddTeam from '../containers/formContainers/addTeam';
import NavBar from './navBar';

class App extends Component {
  render() {
    return (
      <div className="App white">
        <BrowserRouter>
					<div className="container">
            <NavBar />
						<Route exact path="/" component={DisplayAllData} />
            <Route path="/start_game" component={StartGame} />
            <Route path="/add_team" component={AddTeam} />
					</div>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;