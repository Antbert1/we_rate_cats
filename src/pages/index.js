import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import '../App.css';
// import { testFunction } from '../util';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header root />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        data: state.dataReducer.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(Actions, dispatch) }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
