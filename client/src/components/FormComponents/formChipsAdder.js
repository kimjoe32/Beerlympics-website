import React, { Component } from 'react';
import { Chip } from 'react-materialize';

/*
    Creates input field that adds chips when 'enter' is pressed
*/
class FormChipsAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {names:[], inputText:''};
        this.renderChips.bind(this);
        this.handleEnterPress.bind(this);
        this.handleChange.bind(this);
    }

    renderChips() {
        const chips = this.state.names.map((c) => {
            return <Chip key={c} close>{c}</Chip>
        });
        return chips;
    }

    handleEnterPress(e) {
        if (e.key === 'Enter') {
            const newNames=this.state.names.concat(e.target.value);

            //add name to list if not already in list
            if(this.state.names.indexOf(e.target.value) === -1) {
                this.setState({names: newNames});
                const { onChipChange, fieldName } = this.props;
                onChipChange(newNames, fieldName);
            }
            
            this.setState({inputText:''});
            e.preventDefault();
        }
    }

    handleChange(e) {
        //controlled component handler
        this.setState({inputText: e.target.value});
    }

    render() {
        return (
            <div>
                <div> { this.renderChips() } </div>
                <input type="text" value={this.state.inputText} 
                onKeyPress={e => this.handleEnterPress(e)}
                onChange={e => this.handleChange(e)}/>
            </div>
        )
    }
}

export default FormChipsAdder;