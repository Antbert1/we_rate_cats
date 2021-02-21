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
            self.props.actions.setCatList(self.removeDuplicates(responseJson, "sub_id"));
            //Get favourites and cross reference
            fetch(`https://api.thecatapi.com/v1/favourites?limit=100`, requestOptions)
                .then(response => response.json())
                .then((responseJson)=> {
                  if (responseJson.length == undefined) {
                    //An error has occured
                    self.setState({
                      loading: false,
                      errorMsg: true
                    });
                  } else {
                    self.addFavourites(responseJson);
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
          {cat.favourite ?
            <i className="fas fa-heart emptyHeart" onClick={()=>this.unfavourite(cat)}></i>
            :
            <i className="far fa-heart fullHeart" onClick={()=>this.favourite(cat)}></i>
          }

        </div>
      </div>
    )
  }

  favourite(cat) {
    this.setState({
      loading: true
    });
    var self = this;
    //Use cat in response
    var catID = cat.id;
    var bodyToSend = {
      "image_id": cat.id,
      "sub_id": cat.sub_id
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': '45d49036-1938-44e2-b443-af805aeb55fb'},
        body: JSON.stringify(bodyToSend)
    };
    fetch('https://api.thecatapi.com/v1/favourites', requestOptions)
        .then(response => response.json())
        .then((responseJson)=> {
          if (responseJson.message == 'SUCCESS') {
            //Sort out favourites in reducer
            self.addFavourite(catID, responseJson.id);
          }
          self.setState({
            loading: false
          });
        })
        .catch((error) => {
          console.log(error);
          self.setState({
            loading: false
          });
        });
  }

  unfavourite(cat) {
    this.setState({
      loading: true
    });
    var self = this;
    //Use cat in response
    var catID = cat.favouriteID;
    const requestOptions = {
        method: 'DELETE',
        headers: { 'x-api-key': '45d49036-1938-44e2-b443-af805aeb55fb'}
    };
    fetch('https://api.thecatapi.com/v1/favourites/'+catID, requestOptions)
        .then(response => response.json())
        .then((responseJson)=> {
          if (responseJson.message == 'SUCCESS') {
            //Sort out favourites in reducer
            self.removeFavourite(catID);
          }
          self.setState({
            loading: false
          });
        })
        .catch((error) => {
          console.log(error);
          self.setState({
            loading: false
          });
        });
  }

  addFavourites(ids) {
    //Cross reference id list with cat list and add a favourite field
    let newCatList = this.props.catList;
    newCatList.map(o => o.favouriteID = null);
    newCatList.map(o => o.favourite = false);
    for (var i = 0; i < newCatList.length; i++) {
      for (var j = 0; j < ids.length; j++) {
        if (newCatList[i].sub_id == ids[j].sub_id) {
          newCatList[i].favouriteID = ids[j].id;
          newCatList[i].favourite = true;
        }
      }
    }
    this.props.actions.setCatList(newCatList);
  }

  addFavourite(catID, faveID) {
    //Add this to our favourites list
    let newCatList = this.props.catList;
    for (var i = 0; i < newCatList.length; i++) {
      if (newCatList[i].id == catID) {
        newCatList[i].favouriteID = faveID;
        newCatList[i].favourite = true;
      }
    }
    this.props.actions.setCatList(newCatList);
  }

  removeFavourite(id) {
    //Cross reference id list with cat list and remove the favourite field
    let newCatList = this.props.catList;
    for (var i = 0; i < newCatList.length; i++) {
      if (newCatList[i].favouriteID == id) {
        newCatList[i].favouriteID = null;
        newCatList[i].favourite = false;
      }
    }
    this.props.actions.setCatList(newCatList);
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
              <div>
                There has been a problem retrieving your cats. Please check your internet connection and try again
              </div>
            </div>
          }
          {(this.props.catList.length == 0 && !this.state.loading) ?
            <div className="catRetrievalError">
              <div>
                No cats yet. Click on Upload New Cat to get started
              </div>
            </div>
            :
            <div className="catRows">
              {this.props.catList.map((cat, index) => (
                this.renderCat(cat, index)
              ))}
            </div>
          }
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
