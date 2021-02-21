//Loading spinner that displays when app is busy
import React, { Component } from 'react';

class Loading extends Component {

  render() {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    )
  }
}

export default Loading;
