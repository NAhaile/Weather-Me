import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Time from './components/Time';


class App extends Component {
  // Initialize state
  state = {} // empty object, something for react I guess

render() {

    return (
      <div>
        <h1>Weather me!</h1>
        <Button />
        <Time />

      </div>
      );    
  }
}


export default App;
