import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as Actions from '../actions';
import { withRouter } from "react-router-dom";
// import { compressToLimit } from '../util';
import Header from '../components/Header';
import Loading from '../components/Loading';
import defaultImg from '../assets/images/blankCat.png';
import back from '../assets/images/backChevron.png';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileToUpload: "",
      loading: false,
      imageSource: defaultImg,
      saveButton: false,
      errorMsg: null
    }
  }

  _onChange() {
    // Preview the image
    var file = this.refs.file.files[0];
    // Check an image has been uploaded
    if (this.refs.file.files.length > 0) {
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        this.setState({
            imageSource: [reader.result],
            saveButton: true,
            fileToUpload: file,
            errorMsg: null
        })
       }.bind(this);
    }
  }

  submit() {
    //Need to be able to use this within the fetch response
    var self = this;
    //Start loading spinner
    self.setState({
      loading: true
    });
    const formData = new FormData();
    formData.append("file", this.state.fileToUpload);
    formData.append("sub_id", this.state.fileToUpload.name);
    
    const requestOptions = {
        method: 'POST',
        headers: { 'x-api-key': '45d49036-1938-44e2-b443-af805aeb55fb'},
        body: formData
    };
    fetch('https://api.thecatapi.com/v1/images/upload', requestOptions)
        .then(response => response.json())
        .then((responseJson)=> {
          debugger;
          if (responseJson.approved !== 1) {
            self.setState({
              fileToUpload: "",
              loading: false,
              imageSource: defaultImg,
              saveButton: false,
              errorMsg: responseJson.message
            });
          } else {
            this.props.history.push('/');
          }
        })
        .catch((error) => {
          console.log(error);
          self.setState({
            fileToUpload: "",
            loading: false,
            imageSource: defaultImg,
            saveButton: false,
            errorMsg: error
          });
        });
  }

  render() {
    return (
      <div>
        {this.state.loading &&
          <Loading />
        }
        <div className="container">
          <Header root={false} />
          <img src={back} className="backChevron" onClick={()=>this.props.history.push('/')} />
          <div className="catImage">
            <img src={this.state.imageSource} />
          </div>
          <div className="uploaderContent">
            <label htmlFor="image-upload" className="customImgUpload buttonStyle">
              UPLOAD CAT
            </label>
          </div>
          <input
            ref="file"
            type="file"
            id="image-upload"
            name="imageFile"
            accept="image/jpeg, image/png"
            onChange={()=>this._onChange()}
            className="defaultInput"
          />
          <div className="save">
            <div
              className={"saveBtn " + (this.state.saveButton ? 'activeSave' : 'inactiveSave')}
              onClick={()=>this.submit()}
              >
              SAVE
            </div>
          </div>
          {this.state.errorMsg !== null &&
            <div className="errorMsg">
              {this.state.errorMsg}
            </div>
          }
        </div>
      </div>
    )
  }

}
//
// const mapStateToProps = (state, props) => {
//     return {
//         data: state.dataReducer.data
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return { actions: bindActionCreators(Actions, dispatch) }
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Upload);

export default Upload;
