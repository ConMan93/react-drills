import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    enterUserName(input) {
        this.setState({
            username: input
        })
    }

    enterPassWord(input) {
        this.setState({
            password: input
        })
    }

    handleClick() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
          <div>
    
            <input type='text' onChange={e => this.enterUserName(e.target.value)} />
            <input type='text' onChange={e => this.enterPassWord(e.target.value)} />
            <button onClick={() => this.handleClick()} > Login </button>
            
          </div>
        );
      }
}