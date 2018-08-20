import React from 'react';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import $ from "jquery";

import {Consumer} from "../stores/AppContext.jsx";

import Navbar from '../component/Navbar.jsx';

export class SignUpLogin extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            //username: "",
            //password: ""
            session: this.myJson
        };
    }
    
    render(){

        return (
            <div>
                <Navbar />
                <Consumer>
                    {({ state, actions }) => 
                        {
                            
                            /*function handleModal() {
                                console.log("handle modal on click");
                                if (state.isLoading == false) {
                                    if (state.session.message !== 'undefined'){
                                //if (state.session.data.status == 403){
                                    $("#loginMessageModal").modal();
                                    }
                                }else {
                                    $("#loginMessageModal").modal('hide');
                                }
                            } */
                            
                           $("#newUserModal").on("hidden.bs.modal", function () {
                                location.reload();
                            });
                            
                            /*var incorrectLoginMessage = "";
                            if (state.session.message !== 'undefined'){
                                if (state.session.message.includes("ERROR")){
                                    incorrectLoginMessage = "Invalid login. Please try again.";
                                }else{
                                    incorrectLoginMessage = "";
                                }
                            }*/

                            if (typeof(state.session.token) !== 'undefined'){ //&& $("#loginMessageModal").modal('hide')){
                                return (<Redirect to="/storehome/" />);
                            }else{
                                return(
                                    <React.Fragment>
                                        <div className="container-fluid">
                                            <div className="row justify-content-center pt-4">
                                                <div className="col-md-4">
                                                    <div className="card my-3 mx-auto">
                                                        <div className="card-header">
                                                            <h4>Sign Up for an Account</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            
                                                            <form onSubmit={(e) => {
                                                                                    e.preventDefault();
                                                                                    actions.createUser(this.state.first_name, this.state.last_name, this.state.newEmail, this.state.newPassword);
                                                                                    $("#newUserModal").modal();
                                                            }}>
                                                                <input className="form-control mb-2" value={this.state.first_name} placeholder="First name" onChange={(e) => this.setState({first_name: e.target.value})} onSubmit={(e) => this.setState(this.value="")}/>
                                                                <input className="form-control mb-2" value={this.state.last_name} placeholder="Last name" onChange={(e) => this.setState({last_name: e.target.value})}/>
                                                                <input type="email" className="form-control mb-2" value={this.state.newEmail} placeholder="Email address" onChange={(e) => this.setState({newEmail: e.target.value})}/>
                                                                <input type="password" className="form-control mb-2" value={this.state.newPassword} placeholder="Create password" onChange={(e) => this.setState({newPassword: e.target.value})}/>
                                                                {/*<input type="password" className="form-control mb-2" value={""} placeholder="Re-type password"/> --HOW TO VALIDATE SAME PASSWORD TYPED?--*/}
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
                                                            <p>{/*incorrectLoginMessage*/}</p>
                                                            <form role="form" onSubmit={(e) => {
                                                                                                e.preventDefault();
                                                                                                //handleModal(e);
                                                                                                actions.logIn(this.state.username, this.state.password);
                                                                                                //$("#loginMessageModal").modal();
                                                            }}>
                                                                <input type="email" className="form-control mb-2" value={this.state.username} placeholder="Email address" onChange={(e) => this.setState({username: e.target.value})}/>
                                                                <input type="password" className="form-control mb-2" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                                                                <button type="submit" className="btn btn-primary btn-block mb-2">Log In</button>
                                                                <button type="button" className="btn btn-outline-secondary btn-block btn-sm" data-toggle="modal" data-target="#forgotPassword">Lost your password?</button>
                                                            </form>
                                                       
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal fade" id="newUserModal" tabIndex="-1" role="dialog">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">title</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        {
                                                            //(typeof(state.session.token) !== 'undefined') ? <p>success</p>
                                                            //:
                                                            <p>User account created. Please sign in to continue.</p>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            }
                        }
                    }
                </Consumer>
            </div>
        );
    }
}




SignUpLogin.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object
};

{/*FORGOT PASSWORD MODAL
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
</div>*/}