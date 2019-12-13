import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tom', age: 26 },
      { name: 'Kelly', age: 27 },
      { name: 'Nero Beans', age: 4 }
    ],
    otherState: 'some other value'
  };
  
  switchNameHandler = ( newName ) => {
    this.setState( {
      persons: [
        { name: newName, age: 26 },
        { name: 'Kelly', age: 27 },
        { name: 'Nero', age: 4 },
      ]
    })
   }

   nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tom', age: 26},
        { name: event.target.value, age: 27},
        { name: 'Nero Beans', age: 4}
      ]
    })
   }

  render () {
   return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={ () => this.switchNameHandler('Thomas!!')}> Switch Name </button>
      <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Tom!')}
        changed={this.nameChangedHandler}/>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
    );
  }
}


export default App;