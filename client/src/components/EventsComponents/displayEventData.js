import React, { Component } from 'react';
import DisplayEventCards from '../../containers/EventsContainers/displayEventCards';
import DisplaySelectedEvent from '../../containers/EventsContainers/displaySelectedEvent';
import '../../css/displayEventData.css';
  
class DisplayEventData extends Component {
    render() {
        return(
            <div className="row eventRow">
                <div className="col s4 eventLeftCol">
                    <DisplayEventCards />
                </div>
                <div className="col s8 blue lighten-3">
                    <DisplaySelectedEvent  />
                </div>
            </div>
        );
    }
}

export default DisplayEventData;