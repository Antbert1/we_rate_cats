// Shared header component for app. Only show the upload button on the root page. Passes in a prop 'root' to test this

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="topNav">
            <h1 className="customHeader">
              Beautiful Cats
            </h1>
            {this.props.root &&
              <div className="upload">
                <Button text="UPLOAD NEW CAT" />
              </div>
            }
          </div>
          <div className="divider"></div>
        </div>
      </div>
    )
  }
}

export default Header;
