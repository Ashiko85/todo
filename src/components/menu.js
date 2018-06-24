import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div className="App-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Tasks">Tasks</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            </div>
        );
    }
}

export default Menu;