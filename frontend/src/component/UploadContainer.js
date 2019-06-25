import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import AddUploadComponent from './AddUploadComponent';
import UploadComponent from './UploadComponent';

class HelloWorldApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <div className="container">
                            <Switch>
                                <Route path="/" exact component={UploadComponent} />
                                <Route path="/upload" component={UploadComponent} />
                                <Route path="/add-upload" component={AddUploadComponent} />
                            </Switch>
                        </div>
                    </>
                </Router>
            </>
        )
    }
}

export default HelloWorldApp;