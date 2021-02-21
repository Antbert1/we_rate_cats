import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
//Pages
import RootPage from './pages';
import Upload from './pages/Upload';
import * as Actions from './actions';

class App extends Component {
  //Use root app to deal with navigation
  render() {
    return (
      <Router>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/upload" component={Upload} />
      </Router>
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
