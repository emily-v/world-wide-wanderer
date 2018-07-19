import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import FeaturedPost from '../component/FeaturedPost.jsx';

export class SignUpLogin extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
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
                                    <form>
                                        <input type="email" className="form-control mb-2" placeholder="Email address"/>
                                        <input type="password" className="form-control mb-2" placeholder="Password"/>
                                        <button type="submit" className="btn btn-primary btn-block mb-2">Log In</button>
                                        <button type="button" className="btn btn-outline-secondary btn-block btn-sm">Lost your password?</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-4">
                            <button type="button" className="btn btn-outline-primary btn-block">Return to previous page</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}