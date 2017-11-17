'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export default class Pets extends React.Component {
  onClick() {
    const selection = this.props.type;
    if (selection === 'cat') {
      this.props.dispatch(actions.adoptCat())
    }
    else if (selection === 'dog') {
      this.props.dispatch(actions.adoptDog())
    }
  }

  render() {
    return (
      <div className='section'>
        <header role='banner'>
          <h2>{this.props.animal.name}</h2>
          <img src={this.props.animal.photo} alt='Picture of cat' />
        </header>
        <main role='main'>
          <dl>
            <dt>Gender</dt>
            <dd>{this.props.animal.gender}</dd>
            <dt>Age</dt>
            <dd>{this.props.animal.age}</dd>
            <dt>Breed</dt>
            <dd>{this.props.animal.breed}</dd>
            <dt>Story</dt>
            <dd>{this.props.animal.story}</dd>
          </dl>
          <button className='adopt-button' onClick={event => this.onClick(event)}>Adopt</button>
        </main>
      </div>
    )
  }
}

