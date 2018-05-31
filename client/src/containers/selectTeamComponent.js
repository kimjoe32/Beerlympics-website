import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTeam, getTeamData } from '../actions/index';
import { bindActionCreators } from 'redux';
import EventCard from '../components/EventsComponents/eventCard';
class SelectTeamComponent extends Component {
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
        this.setState({selectedTeam: teamName});
        this.props.selectTeam(teamName);
    }

    checkSelected(teamName) {
        return this.state.selectedTeam === teamName;
    }

    render() {
        return (
            <div>
                { this.props.allTeamsData.map( ({ teamName }) => {
                    return(
                        <EventCard key={ teamName }
                            eventName={ teamName }
                            isSelected={ this.checkSelected(teamName) }
                            onClick={ () => this.clickedTeamCard(teamName) }
                        />
                    );
                })}
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ selectTeam, getTeamData }, dispatch);
}

function mapStateToProps ({ allTeamsData }) {
    return { allTeamsData };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTeamComponent);