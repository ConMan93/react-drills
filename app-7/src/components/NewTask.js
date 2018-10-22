import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            userInput: ''
        }
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleChange(input) {
        this.setState({
            userInput: input
        })
    }

    handleAddTask() {
        this.props.updateList(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }
    render() {
        return(
            <div>
                <input value={this.state.userInput} onChange={e => this.handleChange(e.target.value)} placeholder='Enter new task' />
                <button onClick={this.handleAddTask}> Add </button>
            </div>
        )
    }
}