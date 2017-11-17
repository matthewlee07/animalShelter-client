'use strict';

import React from 'react';
// import { connect } from 'react-redux';

export class Pets extends React.Component {


  render() {
    return (
      <div className='section'>
        <header role='banner'>
          <h2>{this.props.animal.name}</h2>
          <img src={this.props.animal.photo} alt='Picture of animal' />
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
          <button className='adopt-button' onClick={this.props.onAdoptAnimal}>Adopt</button>
        </main>
      </div>
    )
  }
}