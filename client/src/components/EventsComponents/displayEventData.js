import React, { Component } from 'react';
import DisplayEventCards from '../../containers/EventsContainers/displayEventCards';
import DisplayEventTree from '../../containers/EventsContainers/displayEventTree';
import '../../css/displayEventData.css';
  
class DisplayEventData extends Component {
    render() {
        return(
            <div className="row eventRow">
                <div className="col s4 eventLeftCol">
                    <DisplayEventCards />
                </div>
                <div className="col s8 blue">
                    <DisplayEventTree  />
                </div>
            </div>
        );
    }
}

export default DisplayEventData;