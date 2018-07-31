import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
//import ProductCard from '../component/ProductCard.jsx';
//import BlogSidebar from '../component/BlogSidebar.jsx';

//import {Consumer} from "../stores/AppContext.jsx";

export class Gallery extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-6 col-sm-4 col-lg-3">
                            <img src="http://via.placeholder.com/1200x1000" className="img-fluid img-thumbnail rounded-0" data-toggle="modal" data-target="#imagePopUp"/>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <img src="http://via.placeholder.com/600x500" className="img-fluid img-thumbnail rounded-0"/>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <img src="http://via.placeholder.com/600x500" className="img-fluid img-thumbnail rounded-0"/>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <img src="http://via.placeholder.com/600x500" className="img-fluid img-thumbnail rounded-0"/>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <img src="http://via.placeholder.com/600x500" className="img-fluid img-thumbnail rounded-0"/>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <img src="http://via.placeholder.com/600x500" className="img-fluid img-thumbnail rounded-0"/>
                        </div>
                        
                        
                    </div>
                </div>
                {/*-----START SINGLE IMAGE POP-UP MODAL-----*/}
                <div className="modal fade" id="imagePopUp">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <button type="button" className="close text-right px-2" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                            <div className="card">
                                <img className="card-img-top" src="http://via.placeholder.com/1200x1000" />
                                <div className="card-body py-2">
                                    <div className="card-text">
                                        <ul className="list-inline d-flex justify-content-between text-secondary">
                                            <li className="list-inline-item">Location, Location</li>
                                            <li className="list-inline-item">Date taken</li>
                                        </ul>
                                        <p>Lorem ipsum dolor amet shaman raclette butcher pabst etsy, umami next level XOXO glossier synth mollit health goth stumptown sunt dreamcatcher.</p>
                                        <ul className="list-inline mb-0 text-center text-secondary">
                                            <li className="list-inline-item px-sm-3">tag1</li>
                                            <li className="list-inline-item px-sm-3">tag2</li>
                                            <li className="list-inline-item px-sm-3">tag3</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <a href="#" className="text-center mb-3" data-dismiss="modal"><small>close</small></a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}