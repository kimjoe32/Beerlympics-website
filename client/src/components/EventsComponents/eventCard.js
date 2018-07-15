import React, { Component } from 'react';

const cardStyle = {
    borderRadius: '0px',
    margin:"0"
}
class EventCard extends Component {
    render() {
        const {eventName, onClick, isSelected, className} = this.props;
        return (
            <div className={`card-panel ${isSelected? "blue lighten-3": "teal"} ${className}`}
                onClick={onClick}
                style={cardStyle}
            >
                <span className="white-text">{eventName}</span>
            </div>
        );
    }
}

export default EventCard;