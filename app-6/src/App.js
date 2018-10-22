import React, { Component } from 'react';
import './App.css';

//Components
import Todo from './components/Todo';

class App extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      tasks: ['clean']
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateTasks = this.updateTasks.bind(this)

  }

  handleChange(input) {
    console.log(input)
    this.setState({
      userInput: input
    })
  }

  updateTasks(val) {
    let moreTasks = this.state.tasks.slice();
    moreTasks.push(val)

    this.setState({
      tasks: moreTasks,
      userInput: ''
    })
  }

  render() {

    let taskList = this.state.tasks.map( (element, i) => {
      return (
        <Todo key={ i } tasks={ element } />
      )
    })

    return (
      <div className="App">

        <h1>My To-Do List:</h1>
        <input onChange={e => this.handleChange(e.target.value)} value={this.state.userInput} />
        <button onClick={() => this.updateTasks(this.state.userInput)}> Add </button>

        <div>
          { taskList }
        </div>
        
      </div>
    );
  }
}

export default App;
