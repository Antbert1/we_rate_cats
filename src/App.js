import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import SubComponent from './components/SubComponent';
import './App.css';
import { getPlatform } from './util';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              Page Title
            </div>
            <SubComponent string="String to Display" />
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
