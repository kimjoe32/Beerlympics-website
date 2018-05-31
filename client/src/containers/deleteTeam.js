import React, { Component } from 'react';
import { Icon, Modal, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { deleteTeam } from '../actions/index';
import { bindActionCreators } from 'redux';
import SelectTeamComponent from './selectTeamComponent';
import { Link } from 'react-router-dom';

const submitBtnStyle = {
    marginTop:"5px"
}

class DeleteTeam extends Component {
    constructor(props) {
        super(props);
        this.state={
            userSelectedTeam: true
        };
    }
    deleteSelectedTeam (selectedEditTeam) {
        console.log(selectedEditTeam);
        if (selectedEditTeam) {
            this.props.deleteTeam(selectedEditTeam);
        } else {
            this.setState({
                userSelectedTeam: false
            });
        }
    }
    render() {
        const modalBtn = <Button 
            className="next waves-effect  btn-large hoverable red"
            style={ submitBtnStyle }>
            <Icon left>delete</Icon>
            Delete Team
        </Button>;

        const modalActions = [
            <Link to="/"
                className="modal-close transparent black-text z-depth-0" 
                onClick={() => this.deleteSelectedTeam(this.props.selectedEditTeam)}
                >
                DELETE TEAM
                </Link>,
            <Button className="modal-close transparent black-text waves-effect z-depth-0">Cancel</Button>  
        ];

        return (
            <div>
                <h2 className="flow-text">Select a Team to Delete</h2>
                <SelectTeamComponent />
                <Modal
                    actions={modalActions}
                    header='Modal Header'
                    trigger={modalBtn}>
                    <p>Are you sure you want to delete this team? This is irreversible</p>
                </Modal>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ deleteTeam }, dispatch);
}

function mapStateToProps ({ selectedEditTeam }) {
    return { selectedEditTeam };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DeleteTeam);