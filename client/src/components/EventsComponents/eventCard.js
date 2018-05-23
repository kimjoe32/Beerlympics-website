import React, { Component } from 'react';

const cardStyle = {
    borderRadius: '0px',
    margin:"0"
}
class EventCard extends Component {
    showWinner(winnerName) {
        return (
            <div className="white-text"> winner: {winnerName} </div>
        );
    }
    render() {
        const {eventName, winner, onClick, isSelected} = this.props;
        return (
            <div className={`card-panel ${isSelected? "blue": "teal"}`}
                onClick={onClick}
                style={cardStyle}
            >
                <span className="white-text">{eventName}</span>
                {winner!=="" && this.showWinner(winner)}
            </div>
        );
    }
}

export default EventCard;