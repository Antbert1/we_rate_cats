import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Loading from '../components/Loading';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Set a loading state to show a spinner while we retrieve cats
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div>
        {this.state.loading &&
          <Loading />
        }
        <div className="container">
          <Header root />
          Test
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        catList: state.dataReducer.catList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(Actions, dispatch) }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
