import React, { Component } from 'react';
import UploadService from '../service/UploadService';

const divStyle = {
  marginBottom: '7px'
};

class AddUploadComponent extends Component {
    state = {
    uploadName: ""
  }

  handleChange = event => {
    this.setState({ uploadName: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    UploadService.executePostService({"uploadName": this.state.uploadName})
      .then(res => {
        this.props.history.push('/upload')
      })
  }

  render() {
    return (
      <div>
        <h1>Upload</h1>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label>
            <input  className="form-control" type="text" name="uploadName" onChange={this.handleChange} />
          </label>
          <button style={divStyle}className="btn btn-success" type="submit">Add First Name</button>
        </form>
      </div>
    )
  }
}

export default AddUploadComponent