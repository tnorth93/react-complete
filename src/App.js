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
    otherState: 'some other value',
    showPersons: false,
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

   togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
   }

  render () {
    const style = {
      backgroundColor: 'LightGray',
      font: 'inherit',
      border: '2px solid LightBlue',
      padding: '18 px',
      cursor: 'pointer'
    };

   return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button
        style={style}
        onClick={this.togglePersonHandler}> Toggle Persons </button>
      
        <div>
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
      }
    </div>
    );
  }
}


export default App;