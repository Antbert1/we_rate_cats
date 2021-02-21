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
      loading: true,
      errorMsg: false
    }
  }

  componentDidMount() {
    //Retrieve cats
    var self = this;
    const requestOptions = {
        method: 'GET',
        headers: { 'x-api-key': '45d49036-1938-44e2-b443-af805aeb55fb'}
    };

    // Retrieve the max number of 100 cats
    fetch(`https://api.thecatapi.com/v1/images?limit=100`, requestOptions)
        .then(response => response.json())
        .then((responseJson)=> {
          if (responseJson.length == undefined) {
            //An error has occured
            self.setState({
              loading: false,
              errorMsg: true
            });
          } else {
            // Set these cats in the reducer
            // self.props.actions.setCatList(self.removeDuplicates(responseJson, "sub_id"));
            self.props.actions.setCatList(responseJson);
            self.setState({
              loading: false
            });
          }
        })
        .catch((error) => {
          self.setState({
            loading: false
          });
          console.log(error);
        });
  }

  //Remove duplicates from cat list
  removeDuplicates(myArr, prop) {
      return myArr.filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      });
  }

  renderCat(cat, index) {
    return (
      <div key={index} className="catContainer" >
        <div className="innerContainer">
          <img src={cat.url}/>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.loading &&
          <Loading />
        }
        <div className="container">
          <Header root />
          {this.state.errorMsg &&
            <div className="catRetrievalError">
              There has been a problem retrieving your cats. Please check your internet connection and try again
            </div>
          }
          <div className="catRows">
            {this.props.catList.map((cat, index) => (
              this.renderCat(cat, index)
            ))}
          </div>
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
