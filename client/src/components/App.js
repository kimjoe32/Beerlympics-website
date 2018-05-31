import React, { Component } from 'react';
import '../css/App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import DisplayAllData from './displayAllData';
import StartGame from '../containers/startGame';
import AddTeam from '../containers/formContainers/addTeam';
import NavBar from './navBar';
import Footer from './footer';
import DeleteTeam from '../containers/deleteTeam';

const appStyle= {
  minHeight: "100vh"
};
class App extends Component {
  render() {
    return (
      <div>
        <div className="App white" style={appStyle} >
          <BrowserRouter>
            <div className="container">
              <NavBar />
              <Route exact path="/" component={ DisplayAllData } />
              <Route path="/start_game" component={ StartGame } />
              <Route path="/add_team" component={ AddTeam } />
              <Route path="/edit_team" render={ () => <AddTeam /> } />
              <Route path="/delete_team" component={ DeleteTeam } />
              
            </div>
          </BrowserRouter>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;