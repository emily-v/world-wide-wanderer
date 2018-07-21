import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import {Consumer} from "../stores/AppContext.jsx";//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Navbar(props){
    
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary navbar-toggleable-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleContainer">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggleContainer">
                    <Link to={"/"} className="navbar-brand d-none d-sm-inline-block">
                        <img src="http://via.placeholder.com/55x55" alt="logo" className="rounded-circle"/>
                    </Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/blog-home"} className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={"/storehome/"} className="nav-link" href="#">Store</Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light" ><Link to={"/signup-login"} className="text-white"><FontAwesomeIcon icon={faUser}/> Account</Link></button>
                </div>
            </nav>
            <header className="bg-light p-3 text-center">
                <img src="http://via.placeholder.com/80x80" alt="logo" className="rounded-circle mr-2"/>
                <img src="http://via.placeholder.com/200x80" alt="website name" className="ml-2" />
            </header>
        </div>
    );
}

export default Navbar;

        
        /*<div className="modal fade" id="loginSignUpModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5>Login or Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>*/
        
/*EventOverview.propTypes = {
        dateTime: PropTypes.string,
        name: PropTypes.string,
        meetupID: PropTypes.number
    };*/

