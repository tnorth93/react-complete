import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tom', age: 26},
      { name: 'Kelly', age: 27},
      { name: 'Nero Beans', age: 4}
    ]
  }

  switchNameHandler = () => {
   // Don't do this!!!!!!!! this.state.persons[0].name = 'Thomas';
   this.setState({
    persons: [
      { name: 'Thomas', age: 26},
      { name: 'Kelly', age: 27},
      { name: 'Nero Beans', age: 4}
    ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
