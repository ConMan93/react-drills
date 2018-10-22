import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      input: '',
      list: [
        'spaghetti',
        'ice cream',
        'sushi',
        'bologna',
        'cheese'
      ]
    }
  }

  handleChange(input) {
    this.setState({
      input: input
    })
  }

  render() {

    let foodsToDisplay = this.state.list.filter((item, i) => {
      return item.includes(this.state.input);
    }).map((item, i) => {
      return <h2 key={ i }>{ item }</h2>
    })

    return (
      <div>
      
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
