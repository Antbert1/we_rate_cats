import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as Actions from '../actions';

class Loading extends Component {

  render() {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    )
  }
}

// const mapStateToProps = (state, props) => {
//     return {
//         data: state.dataReducer.data
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return { actions: bindActionCreators(Actions, dispatch) }
// };
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Loading);

export default Loading;
