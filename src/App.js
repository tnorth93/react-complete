import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
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
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid LightBlue',
      padding: '18 px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      },
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
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

     let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

   return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>How ya doing?</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}> Toggle Persons </button>
          {persons}
      </div>
    </StyleRoot>
    );
  }
}


export default Radium(App);