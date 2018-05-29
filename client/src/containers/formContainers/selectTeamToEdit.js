import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-materialize';
import EventCard from '../../components/EventsComponents/eventCard';
import { reduxForm } from 'redux-form';
import { selectTeam, getTeamData } from '../../actions/index';
import { bindActionCreators } from 'redux';

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

    componentDidMount() {
        this.props.getTeamData();
    }

    clickedTeamCard(teamName) {
        const { selectTeam } = this.props;
        this.setState({selectedTeam: teamName});
        selectTeam(teamName);
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

SelectTeamToEdit = reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'addTeamForm'
})(SelectTeamToEdit);

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ selectTeam, getTeamData }, dispatch);
}

function mapStateToProps ({ allTeamsData }) {
    return { allTeamsData };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SelectTeamToEdit);