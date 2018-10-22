import React, { Component } from 'react';

export default class InputBox extends Component {

  constructor() {
    super();

    this.state = {
      title: ''
    }
  }

  handleChange(e) {
    this.setState({
      title: e
    })
  }

  render() {
    return (
      <div>

        <input type='text' onChange={e => this.handleChange(e.target.value)} />
        <h2>{this.state.title}</h2>
        
      </div>
    );
  }
}