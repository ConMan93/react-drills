import React, { Component } from 'react';
import './App.css';

//Components
import List from './components/List';
import NewTask from './components/NewTask';

class App extends Component {

  constructor() {
    super();

    this.state = {
      list: []
    }
    this.updateList = this.updateList.bind(this)
  }

  updateList(val) {

    let listCopy = this.state.list.slice()
    listCopy.push(val)

    this.setState({
      list: listCopy
    })
  }

  render() {
    return (
      <div className="App">

        <h1>My To-Do List:</h1>
        <NewTask updateList={this.updateList} />
        <List tasks={this.state.list} />

      </div>
    );
  }
}

export default App;
