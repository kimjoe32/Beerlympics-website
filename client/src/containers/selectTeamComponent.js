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

    clickedTeamCard(id) {
        this.setState({selectedTeam: id});
        this.props.selectTeam(id);
    }

    checkSelected(id) {
        return this.state.selectedTeam === id;
    }

    render() {
        return (
            <div>
                { this.props.allTeamsData.map( ({ teamName, _id }) => {
                    return(
                        <EventCard 
                            key={ _id }
                            eventName={ teamName }
                            isSelected={ this.checkSelected(_id) }
                            onClick={ () => this.clickedTeamCard(_id) }
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