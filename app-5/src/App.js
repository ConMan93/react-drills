import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
        myImage={ 'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d' } />
      </div>
    );
  }
}

export default App;
