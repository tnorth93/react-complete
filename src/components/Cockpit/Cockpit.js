import React from 'react';

const cockpit = (props) => {
    let assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={props.assignedClasses.join(' ')}>How ya doing?</p>
            <button
            className={btnClass.join(' ')}
            onClick={this.togglePersonHandler}> Toggle Persons </button>
        </div>
    );
};

export default cockpit;