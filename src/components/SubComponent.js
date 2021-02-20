import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import '../App.css';

class SubComponent extends Component {

  render() {
    //Show the sent prop data here
    return (
        <div>
          TEST
          {this.props.string}
        </div>
        )
    }
  }

const mapStateToProps = (state, props) => {
    return {
        data: state.dataReducer.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(Actions, dispatch) }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubComponent);
