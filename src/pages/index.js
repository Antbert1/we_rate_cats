import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';
// import { testFunction } from '../util';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="topNav">
              <h1 className="customHeader">
                Beautiful Cats
              </h1>
              <div className="upload">
                <Button text="UPLOAD NEW CAT" />
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
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
