import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/index';
import { bindActionCreators } from 'redux';
import EventCard from '../../components/EventsComponents/eventCard';
class DisplayEventCards extends Component {
    componentDidMount() {
        this.props.getEvents();
    }
    renderCards(events) {
        if (!events) return;
        return (
            <EventCard key={events.eventName} eventName={events.eventName} winner={events.winner} />
        );
    }
    render() {
        return (
            <div>{this.props.eventsData.map(this.renderCards)}</div>
        );
    }
}


function mapStateToProps({ eventsData }) {
    return { eventsData };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getEvents }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayEventCards);