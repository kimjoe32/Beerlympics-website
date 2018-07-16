import React, { Component } from 'react';
import AddTeamForm from './addTeamForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTeam } from '../../actions/index';
//wrap the component to access withRouter to access the pathname
const AddTeam = withRouter(props => <AddTeamA {...props}/>);

class AddTeamA extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isEditing: false
        }
    }

    componentWillMount() {
        this.setState({
            isEditing: this.props.location.pathname.includes('edit')
        });
        // console.log(this.props.location.pathname.includes('edit'));
        if (!this.state.isEditing) {
            this.props.selectTeam('');
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.isEditing ? "Edit a" : "Add a New"} Team</h1>
                <AddTeamForm isEditing={this.state.isEditing}/>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ selectTeam }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTeam);