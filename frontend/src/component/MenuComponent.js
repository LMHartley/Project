import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MenuComponent extends Component {
    
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/homepage" className="navbar-brand">Home</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/upload">Recent Uploads</Link></li>
                        <li><Link className="nav-link" to="/add-upload">Upload</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }

}

export default MenuComponent