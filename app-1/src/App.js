import React, { Component } from 'react';
// import InputBox from './Components/InputBox';
// import List from './Components/List';
import Login from './Components/Login'

class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     input: '',
  //     list: [
  //       'spaghetti',
  //       'ice cream',
  //       'sushi',
  //       'bologna',
  //       'cheese'
  //     ]
  //   }
  // }

  // handleChange(input) {
  //   this.setState({
  //     input: input
  //   })
  // }

  render() {

    // let foodsToDisplay = this.state.list.filter((item, i) => {
    //   return item.includes(this.state.input);
    // }).map((item, i) => {
    //   return <h2 key={ i }>{ item }</h2>
    // })

    return (
      <div>
        <Login />
        {/* <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {foodsToDisplay} */}
      </div>
    );
  }
}



export default App;
