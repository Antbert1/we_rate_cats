import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Button extends Component {

  render() {
    return (
      <div className="buttonStyle">
        <Link to="/upload">{this.props.text}</Link>
      </div>
      )
  }
}

export default Button;
