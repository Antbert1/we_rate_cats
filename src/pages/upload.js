import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
// import ReactCrop from "react-image-crop";
import { compressToLimit, uploadImage } from '../util';
import Header from '../components/Header';
import defaultImg from '../assets/images/blankCat.png';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileToUpload: "",
      loading: false,
      imageSource: defaultImg,
      saveButton: false
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
            fileToUpload: file
        })
       }.bind(this);
    }
  }

  submit() {
    // Ensure image is sized down
    const formData = new FormData();
    formData.append("file", this.state.fileToUpload);
    formData.append("sub_id", this.state.fileToUpload.name);
    var fileToStringify  = {
     'lastModified'     : this.state.fileToUpload.lastModified,
     'lastModifiedDate' : this.state.fileToUpload.lastModifiedDate,
     'name'             : this.state.fileToUpload.name,
     'size'             : this.state.fileToUpload.size,
     'type'             : this.state.fileToUpload.type
   };
    const bodyToSend = {
      "file": JSON.stringify(fileToStringify),
      "sub_id": this.state.fileToUpload.name
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'x-api-key': '45d49036-1938-44e2-b443-af805aeb55fb'},
        body: formData
    };
    fetch('https://api.thecatapi.com/v1/images/upload', requestOptions)
        .then(response => response.json())
        .then((responseJson)=> {
          debugger;
        })
        .catch((error) => {
          console.log(error);
          debugger;
        });
  }


  render() {
    return (
      <div className="container">
        <Header root={false} />
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
)(Upload);
