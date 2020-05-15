import React from 'react';
import classes from './Person.css';
import styled from 'styled-components'

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
			<p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>  
  )
}

export default person;