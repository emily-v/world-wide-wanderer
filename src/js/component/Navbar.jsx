import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          username: '',
          password: ''
        };
    }
    
    render(){
        
        //const session = this.props;
        
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-secondary navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleContainer">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggleContainer">
                        <Link to={"/"} className="navbar-brand d-none d-sm-inline-block">
                            <img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-e1534169380538.png" alt="logo" width="60" className="rounded-circle"/>
                        </Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={"/blog-home"} className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={"/gallery"} className="nav-link" href="#">Gallery</Link>
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
                        <Consumer>
                            {({ state, actions }) => 
                                (
                                  
                                    typeof state.session.username !== 'undefined' ?
                                        <div>    
                                            <button className="btn btn-outline-light mr-1" ><Link to={"/shoppingcart/"} className="text-white"><FontAwesomeIcon icon={faShoppingBag}/> {state.cart.length}</Link></button>
                                            <button className="btn btn-outline-light" ><Link to={"/profile"} className="text-white"><FontAwesomeIcon icon={faUser}/> Profile</Link></button> {/*change 'Profile' to user's first name*/}
                                            <button className="btn btn-outline-light" onClick={() => actions.logout()}><Link to="#" className="text-white">Log Out</Link></button> {/*redirect to store home on click*/}
                                        </div>
                                    :
                                        <button className="btn btn-outline-light" ><Link to={"/signup-login"} className="text-white"><FontAwesomeIcon icon={faUser}/> Log In</Link></button>
                                  
                                )
                            }
                        </Consumer>
                    </div>
                </nav>
                <header className="p-3 text-center border-bottom">
                    <img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-e1534169380538.png" alt="logo" width="120" className="rounded-circle mr-2"/>
                    <img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-1-e1534169335609.png" alt="website name" height="100" className="ml-sm-2" /> {/*--ADD CSS SO IMAGE RESIZES ON XS SCREEN--*/}
                </header>
            </div>
        );
    }
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
        
Navbar.propTypes = {
    session: PropTypes.object,
    username: PropTypes.string
};

