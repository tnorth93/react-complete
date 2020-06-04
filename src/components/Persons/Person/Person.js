import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Auxiliary>
        <p key='i1' onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old
        </p>
        <p key='i2'>{this.props.children}</p>
        <input
          key='i3'
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
      // <div className={classes.Person}>
      // </div>  
    );
  }
}

Person.propTypes= {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);