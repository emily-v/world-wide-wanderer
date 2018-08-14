import React from 'react';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";

import Navbar from '../component/Navbar.jsx';

export class SignUpLogin extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: "",
            password: "",
            loggedIn:false
        };
    }
    
    render(){
        /*if (typeof(this.state.session !== 'undefined')){
            return <Redirect to="/storehome/" />;
        }*/
        
        /*if (this.state.loggedIn == true){
            return <Redirect to="/storehome/" />;
        }*/

        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <Consumer>
                        {({ state, actions }) => 
                            {
                                return(
                                    <div className="row justify-content-center pt-4">
                                        <div className="col-md-4">
                                            <div className="card my-3 mx-auto">
                                                <div className="card-header">
                                                    <h4>Sign Up for an Account</h4>
                                                </div>
                                                <div className="card-body">
                                                    
                                                    <form>
                                                        <input className="form-control mb-2" placeholder="First name"/>
                                                        <input className="form-control mb-2" placeholder="Last name"/>
                                                        <input type="email" className="form-control mb-2" placeholder="Email address"/>
                                                        <input type="password" className="form-control mb-2" placeholder="Create password"/>
                                                        <input type="password" className="form-control mb-2" placeholder="Re-type password"/>
                                                        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card my-3 mx-auto">
                                                <div className="card-header">
                                                    <h4>Log In</h4>
                                                </div>
                                                <div className="card-body">
                                                    <form role="form" onSubmit={(e) => {
                                                                                        e.preventDefault();
                                                                                        //this.state.loggedIn == true;
                                                                                        actions.loadSession(this.state.username, this.state.password);
                                                    }}>
                                                        <input type="email" className="form-control mb-2" value={this.state.username} placeholder="Email address" onChange={(e) => this.setState({username: e.target.value})}/>
                                                        <input type="password" className="form-control mb-2" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                                                        {/*---NEED TO FIX!!---LINKING TO PROFILE FROM LOG IN BUTTON DOES NOT SAVE SESSION
                                                        <button type="submit" className="btn btn-primary btn-block mb-2"><Link to={"/profile"} className="text-white">Log In</Link></button>change so that only directs to profile on login...if login incorrect, show modal, etc.*/}
                                                        <button type="submit" className="btn btn-primary btn-block mb-2">Log In</button>
                                                        <button type="button" className="btn btn-outline-secondary btn-block btn-sm" data-toggle="modal" data-target="#forgotPassword">Lost your password?</button>
                                                    </form>
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        }
                    </Consumer>
                    <div className="row justify-content-center pt-4">
                        <div className="col-4">
                            <button type="button" className="btn btn-outline-primary btn-block">Return to previous page</button>
                        </div>
                    </div>
                    <div className="modal fade" id="forgotPassword" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Lost password</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <input type="email" className="form-control mb-2" placeholder="Enter your email address"/>
                                        <button type="submit" className="btn btn-secondary btn-block">Send link to reset password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SignUpLogin.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object
};

