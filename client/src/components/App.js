import React, { Component } from 'react';
import '../css/App.css';
import { getTeamData } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import DisplayAllTeamsData from '../containers/displayAllTeamsData';
import AddTeam from '../containers/formContainers/addTeam';

class App extends Component {
  componentDidMount() {
    this.props.getTeamData();
  }
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getTeamData }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);