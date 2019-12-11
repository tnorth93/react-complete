import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Tom', age: 26 },
      { name: 'Kelly', age: 27 },
      { name: 'Nero Beans', age: 4 }
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // Don't do this!!!!!!!! personsState.persons[0].name = 'Thomas';
    setPersonsState({
     persons: [
       { name: 'Thomas', age: 26},
       { name: 'Kelly', age: 27},
       { name: 'Nero Beans', age: 4}
     ]
    })
   }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;