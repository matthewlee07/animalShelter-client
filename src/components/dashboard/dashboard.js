'use strict';

import React from 'react';
// import { connect } from 'react-redux';
import Pets from '../pets/pets';

export default class Dashboard extends React.Component {
  onClick() {
    console.log('clicked!');
    // this.props.dispatch(actions.deleteAnimal())
  }
  
  render() {
  return (
    <div className='section'>
      <Pets animal='these will be cats' onAdoptAnimal={onClick()} />
      <Pets animal='these will be dogs' onAdoptAnimal={onClick()} />
    </div>
  );
}
}