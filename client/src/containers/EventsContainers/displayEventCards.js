import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, selectEvent } from '../../actions/index';
import { bindActionCreators } from 'redux';
import EventCard from '../../components/EventsComponents/eventCard';
class DisplayEventCards extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    renderCards(events) {
        if (!events) return;
        
        return (
            <EventCard key={events.eventName} 
                eventName={events.eventName} 
                winner={events.winner}               
                onClick={() => {this.props.selectEvent(events.eventName);console.log('click');}}
            />
        );
    }

    render() {
        const {selectEvent, selectedEvent} = this.props;
        return (
            <div>
            {this.props.eventsData.map((events) => {
                if (!events) return null;
                
                return (
                    <EventCard key={events.eventName} 
                        eventName={events.eventName} 
                        isSelected={selectedEvent === events.eventName}
                        winner={events.winner}               
                        onClick={() => selectEvent(events.eventName)}
                    />
                );
            })}
            </div>
        );
    }
}


function mapStateToProps({ eventsData, selectedEvent }) {
    return { eventsData, selectedEvent };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getEvents, selectEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEventCards);