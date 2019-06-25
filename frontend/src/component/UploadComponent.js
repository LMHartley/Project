import React, { Component } from 'react';
import UploadService from '../service/UploadService';

class UploadComponent extends Component {
    state = {
        uploads : []
      }

    componentDidMount() {
        
        UploadService.executeGetService()
                .then(response => {
                    this.setState({
                        uploads: response.data
                    })
                })
    }

    render() {
        return (<>
            <h1>Upload Component</h1>
            <div>
               
              <ul className = "list-group">
                 {this.state.uploads.map(upload => <li className = "list-group-item" key={upload.id}>upload: {upload.uploadName} <button className="btn btn-danger float-right"onClick={() => {
                     this.deleteUpload(upload.id)}}>x</button></li>)}
              </ul>
            </div>
            <div className="float-right">
                <button className="btn btn-success " onClick={this.gotoBeanComponent}>Add Upload</button>
            </div>
        </>
        )
    }

    gotoBeanComponent = () => {
        this.props.history.push('/add-upload')
    }

    deleteUpload = (id) => {    
        UploadService.executeDeleteService(id)
            .then(response => {
                this.setState({
                    uploads: response.data
                })
            })
    }
}

export default UploadComponent