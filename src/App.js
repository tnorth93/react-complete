import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Tom', age: 26 },
      { id: 2, name: 'Kelly', age: 27 },
      { id: 3, name: 'Nero Beans', age: 4 }
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

   deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                />
          })}
        </div>
      );
    }

   return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button
        style={style}
        onClick={this.togglePersonHandler}> Toggle Persons </button>
        {persons}
    </div>
    );
  }
}


export default App;