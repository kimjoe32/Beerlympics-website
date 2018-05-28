import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-materialize';
import EventCard from '../../components/EventsComponents/eventCard';

const submitBtnStyle = {
    marginTop:"5px"
}

class SelectTeamToEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTeam: ''
        };
    }

    clickedTeamCard(teamName) {
        this.setState({selectedTeam: teamName});
    }

    checkSelected(teamName) {
        return this.state.selectedTeam === teamName;
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h2 className="flow-text">Select a Team to Edit</h2>
                <div>
                    { this.props.allTeamsData.map( ({ teamName }) => {
                        return(
                            <EventCard key={teamName}
                                eventName={teamName}
                                isSelected={this.checkSelected(teamName)}
                                onClick={() => this.clickedTeamCard(teamName)}
                            />
                        );
                    })}

                    <button type="submit" className="next waves-effect waves-light btn-large hoverable" style={submitBtnStyle}>
                        Edit This Team
                        <Icon right>keyboard_arrow_right</Icon>
                    </button>
                </div>
            </form>
        );
    }
}
function mapStateToProps ({ allTeamsData }) {
    return { allTeamsData };
}
export default connect(mapStateToProps)(SelectTeamToEdit);