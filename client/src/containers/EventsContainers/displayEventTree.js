import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayEventTree extends Component {
    render() {
        if (!this.props.selectedEvent) {
            return <div>No Event Selected</div>
        }
        return(
            <div>{this.props.selectedEvent}</div>
        );
    }
}
function mapStateToProps({ selectedEvent }) {
    return { selectedEvent };
}
export default connect(mapStateToProps)(DisplayEventTree);