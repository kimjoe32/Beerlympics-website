import React, { Component } from 'react';

class EventCard extends Component {
    showWinner(winnerName) {
        return (
            <div className="white-text"> winner: {winnerName} </div>
        );
    }
    render() {
        const {eventName, winner} = this.props;
        return (
        <div onClick={() => console.log('clicked', eventName)} className="card-panel teal">
            <span className="white-text">{eventName}</span>
            {winner!=="" && this.showWinner(winner)}
        </div>
        );
    }
}

export default EventCard;