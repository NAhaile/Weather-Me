import React from 'react'

var today = new Date(); // get current date



class Time extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            time: Date.now()
        };
    }
  render() {
    return (
      <div className="Timey">
        <h1>Time</h1>
        <p>The day today is: {today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear()}</p>
        <p>The time is: {this.state.time}</p>
      </div>
    );
  }
  componentDidMount() { // componentDidMount is called by react when the component is rendered
    this.interval = setInterval(() => {
      this.setState({ // setState is used to update the state of the component
        time: new Date().toLocaleTimeString() //every second, update the time *epoch time*
      });
    }
    , 1000);  // update the time every second

    }
    componentWillUnmount() { // componentWillUnmount is called by react before removing the component from the DOM
        clearInterval(this.interval);
    }

}


export default Time; // export the component, so that it can be used in other files