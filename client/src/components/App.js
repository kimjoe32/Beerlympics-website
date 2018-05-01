import React, { Component } from 'react';
import DisplayAllTeamsData from '../containers/displayAllTeamsData';
import '../css/App.css';
import { getTeamData } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


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