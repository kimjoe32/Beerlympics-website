import React, { Component } from 'react';
// import { Chip } from 'react-materialize';

/*
    Creates input field that adds cards when 'enter' is pressed
*/
class FormCardAdder extends Component {
    constructor(props) {
        super(props);
        const { existingNames } = this.props;
        this.state = {names: existingNames, inputText:''};
    }

    renderCards() {
        //return card that shows name and a delete button
        const cards = this.state.names.map((c) => {
            return (
                <div key={c} className="card-panel blue-grey darken-1 hoverable">
                    <div className="row valign-wrapper" style={{marginBottom: "0px"}}>
                        <h5 className="white-text col s11">{c}</h5>
                        <div className="col s1" >
                            <i className="material-icons white-text"
                                onClick={this.handleCardDelete.bind(this, c)}>delete</i>
                        </div>
                    </div>
                </div>
            )
        });
        return cards;
    }

    handleEnterPress(e) {
        //user submits a new card by pressing enter

        if (e.key === 'Enter') {
            const newNames = this.state.names.concat(e.target.value);

            //add name to list if not already in list
            if(this.state.names.indexOf(e.target.value) === -1) {
                this.setState({names: newNames});
                const { onCardChange, fieldName } = this.props;
                onCardChange(newNames, fieldName);
            }
            //clear input field
            this.setState({inputText:''});
            e.preventDefault();
        }
    }

    handleChange(e) {
        //controlled component handler
        this.setState({inputText: e.target.value});
    }

    handleCardDelete(card) {
        //remove card from state and update form state
        const newState = this.state.names.slice();
        if (newState.indexOf(card) > -1) {
            newState.splice(newState.indexOf(card), 1);
            this.setState({names: newState});
            const { onCardChange, fieldName } = this.props;
            onCardChange(newState, fieldName);
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputText} 
                    onKeyPress={e => this.handleEnterPress(e)}
                    onChange={e => this.handleChange(e)}/>
                { this.renderCards() }
            </div>
        )
    }
}

export default FormCardAdder;