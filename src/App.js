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
  
  switchNameHandler = () => {
    // Don't do this!!!!!!!! personsState.persons[0].name = 'Thomas';
    this.setState( {
      persons: [
        { name: 'Thomas', age: 26 },
        { name: 'Kelly', age: 27 },
        { name: 'Nero', age: 4 },
      ]
    })
   }

  render () {
   return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={this.switchNameHandler}/>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
    );
  }
}


export default App;