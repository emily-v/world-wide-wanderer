import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import {Consumer} from "../stores/AppContext.jsx";//

function NavBar(props){
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary navbar-toggleable-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleContainer">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggleContainer">
                    <a className="navbar-brand d-none d-sm-inline-block" href="#">
                        <img src="http://via.placeholder.com/55x55" alt="logo" className="rounded-circle"/>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light">Account</button>
                </div>
            </nav>
            <header className="bg-light p-3">
                <img src="http://via.placeholder.com/80x80" alt="logo" className="rounded-circle mr-2"/>
                <img src="http://via.placeholder.com/200x80" alt="website name" className="ml-2" />
            </header>
        </div>
        
        /*Previous NavBar code w/o toggle
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
                <a className="navbar-brand" href="#">
                    <img src="http://via.placeholder.com/55x55" alt="logo" className="rounded-circle"/>
                </a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <button className="btn btn-outline-light">Account</button>
            </nav>
            <header className="bg-light p-3">
                <img src="http://via.placeholder.com/80x80" alt="logo" className="rounded-circle mr-2"/>
                <img src="http://via.placeholder.com/200x80" alt="website name" className="ml-2" />
            </header>
        </div>*/
    );
}

/*EventOverview.propTypes = {
        dateTime: PropTypes.string,
        name: PropTypes.string,
        meetupID: PropTypes.number
    };*/

export default NavBar;