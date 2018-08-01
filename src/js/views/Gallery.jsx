import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
//import ProductCard from '../component/ProductCard.jsx';
//import BlogSidebar from '../component/BlogSidebar.jsx';

import {Consumer} from "../stores/AppContext.jsx";

export class Gallery extends React.Component{ //--NEED TO FIX TAGS AND CLEAN UP CODE; ADD GALLERY TO NAVBAR--
    render(){
        return (
            <div>
                <Navbar />
                <Consumer>
                    {({ state, actions }) =>
                        (
                            <React.Fragment>
                                <div className="container-fluid">
                                    <div className="row no-gutters">
                                        {
                                            state.photos.map((item,index)=>{
                                                return(
                                                    <div className="col-6 col-sm-4 col-lg-3" key={index}>
                                                        <img src={item.photoURL} className="img-fluid img-thumbnail rounded-0" data-toggle="modal" data-target={"#imagePopUp"+item.photoID}/>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                {/*-----START SINGLE IMAGE POP-UP MODAL-----*/}
                                <div>
                                    {
                                        state.photos.map((item,index)=>{
                                            return (
                                                <div className="modal fade" id={"imagePopUp"+item.photoID} key={index}>
                                                    <div className="modal-dialog modal-lg" role="document">
                                                        <div className="modal-content">
                                                            <button type="button" className="close text-right px-2" data-dismiss="modal">
                                                                <span>&times;</span>
                                                            </button>
                                                            <div className="card">
                                                                <img className="card-img-top" src={item.photoURL} />
                                                                <div className="card-body py-2">
                                                                    <div className="card-text">
                                                                        <ul className="list-inline d-flex justify-content-between text-secondary">
                                                                            <li className="list-inline-item">{item.location}</li>
                                                                            <li className="list-inline-item">{item.dateTaken}</li>
                                                                        </ul>
                                                                        <p>{item.caption}</p>
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
                                            );
                                        })
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }
                </Consumer>       
            </div>
        );
    }
}

/*Gallery.propTypes = {
        photoID: PropTypes.number,
        photoURL: PropTypes.string,
        location: PropTypes.string,
        dateTaken: PropTypes.string,
        caption: PropTypes.string,
        photoTags: PropTypes.string
    };*/
    
    {/*<React.Fragment>
                    {({ state, actions }) => 
                        (
                            state.photos.map((item,index)=>{
                                return (
                                    <div className="modal fade" id={"imagePopUp"+item.photoID} key={index}>
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="modal-content">
                                                <button type="button" className="close text-right px-2" data-dismiss="modal">
                                                    <span>&times;</span>
                                                </button>
                                                <div className="card">
                                                    <img className="card-img-top" src={item.photoURL} />
                                                    <div className="card-body py-2">
                                                        <div className="card-text">
                                                            <ul className="list-inline d-flex justify-content-between text-secondary">
                                                                <li className="list-inline-item">{item.location}</li>
                                                                <li className="list-inline-item">{item.dateTaken}</li>
                                                            </ul>
                                                            <p>{item.caption}</p>
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
                                );
                            })
                        )
                    }
                </React.Fragment>*/}
            
                
                
                {/*<div className="modal fade" id="imagePopUp">
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
                </div>*/}