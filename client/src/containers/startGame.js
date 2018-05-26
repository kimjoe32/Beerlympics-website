import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

class StartGame extends Component {
    render() {
        const { startGame } = this.props;
        return (
            <div>
                <h1> Start the Beerlympics? </h1>
                <Link to="/" 
                    className="green btn-flat white-text waves-effect hoverable"
                    onClick={() => startGame()}
                >
                    Start
                    <i className="material-icons right">email</i>
                </Link>
            </div>
        );

    }
}
export default connect(null, actions )(StartGame);