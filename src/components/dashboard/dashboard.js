'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import Pets from '../pets/pets';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCat());
    this.props.dispatch(actions.fetchDog());
  }

  render() {
    return (
      <div className='section'>
        <Pets animal={this.props.cat} type='cat' />
        <Pets animal={this.props.dog} type='dog' />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: state.cat,
  dog: state.dog
});

export default connect(mapStateToProps)(Dashboard);