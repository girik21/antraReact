import React, { Component } from 'react';
import addIcon from '../../assets/plus.png';
import './TodoInput.css';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInput: ''
        };
    }

    getLiveInput = (e) => {
        this.setState({ currentInput: e.target.value });
    };

    refreshAdd = () => {
        const { currentInput } = this.state;

        if (currentInput.trim()) {
            this.props.newInput(currentInput);
            this.setState({ currentInput: '' });
        }
    };

    render() {
        return (
            <div className='mainContainer'>
                <div className='inputsContainer'>
                    <input
                        className='inputContainer'
                        type='text'
                        placeholder='Add your tasks here'
                        value={this.state.currentInput}
                        onChange={this.getLiveInput}
                    />
                    <button className='addButton' onClick={this.refreshAdd}>
                        <img src={addIcon} alt="addImage" />
                    </button>
                </div>
            </div>
        );
    }
}
