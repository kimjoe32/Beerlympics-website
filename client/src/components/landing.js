import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return (
			<div style={{marginBottom:"10px"}}>
				<h1>Beerlympics</h1>
				<p className="flow-text">Welcome to the Beerlympics website. This website was created by me to track a Beerlympics.
					I'm not an entire company, so there might be some bugs in this website. Please let me know if you find one.
				</p>

				<div className="divider" />
				<h3>Signing Up</h3>
				<p className="flow-text">One person should sign up for the team. Some things to take note of:</p>
				<ul className="flow-text">
					<li >1. You can only choose a country for your team name</li>
					<li >2. Teams should have a max of 5 members</li>
					<li >3. All team information is finalized the day of the event; however, team information can be edited beforehand</li>
				</ul>
				<Link to="/add_team" className="teal white-text waves-effect btn-large waves-dark">Sign up for a team here</Link>
				<p />
				
				<div className="divider" />
				<h3> See what's happening right now </h3>
				<Link to="/display_data" className="teal white-text waves-effect btn-large waves-dark">See what's happening</Link>
			</div>
		)
	}
};

export default Landing;