import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";

import Navbar from '../component/Navbar.jsx';

export class Profile extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          username:''
        };
    }
    
    render(){
        
        //const {session, actions} = this.props;
        
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row justify-content-center pt-4">
                        <div className="col-md-6">
                            <div className="card my-3 mx-auto">
                                <div className="card-header">
                                    <h4>Profile</h4>
                                </div>
                                <div className="card-body">
                                    <Consumer>
                                        {({ state, actions }) => 
                                            {
                                                return(
                                                    <form>
                                                        <div className="form-group row">
                                                            <label htmlFor="userFirstName" className="col-sm-4 col-form-label font-weight-bold">First name</label>
                                                            <div className="col-sm-8">
                                                                <input type="text" readOnly className="form-control-plaintext" id="userFirstName" value="Firstname"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="userLastName" className="col-sm-4 col-form-label">Last name</label>
                                                            <div className="col-sm-8">
                                                                <input type="text" readOnly className="form-control-plaintext" id="userLastName" value="Lastname"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="userEmail" className="col-sm-4 col-form-label">Email address</label>
                                                            <div className="col-sm-8">
                                                                <input type="text" readOnly className="form-control-plaintext" id="userEmail" value={this.state.user_email}/>{/*NOT WORKING*/}
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="userPassword" className="col-sm-4 col-form-label">Password</label>
                                                            <div className="col-sm-8">
                                                                <button type="button" className="btn btn-outline-secondary" id="userPassword" data-toggle="modal" data-target="#changePassword">Change password</button>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <button type="button" className="btn btn-secondary btn-block"><Link to={"/edit-profile"} className="text-white">Edit profile information</Link></button>
                                                        </div>
                                                    </form>
                                                );
                                            }
                                        }
                                    </Consumer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <button type="button" className="btn btn-outline-primary">Return to previous page</button>
                    </div>
                    <div className="modal fade" id="changePassword" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Reset password</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <input type="password" className="form-control mb-2" placeholder="Current password"/>
                                        <input type="password" className="form-control mb-2" placeholder="New password"/>
                                        <input type="password" className="form-control mb-2" placeholder="Re-type new password"/>
                                        <button type="submit" className="btn btn-secondary btn-block">Submit</button>
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

Profile.propTypes = {
  myJson: PropTypes.object,
  session: PropTypes.object,
  actions: PropTypes.object
};