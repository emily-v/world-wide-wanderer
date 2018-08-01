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
                                    {/*-----START IMAGE GALLERY-----*/}
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
                                                                        <ul className="list-inline mb-0">
                                                                            <li className="list-inline-item pr-sm-3 mr-0">Related destination blog posts:</li>
                                                                            {
                                                                                item.photoTags.map((tag,index)=>{
                                                                                    
                                                                                    /*Format photoTags for nicer display*/
                                                                                    var tagFormatted = "";
                                                                                    if (tag == "northamerica"){
                                                                                        tagFormatted = "North America";
                                                                                    } else if (tag == "unitedstates"){
                                                                                        tagFormatted = "United States";
                                                                                    } else if (tag == "southamerica"){
                                                                                        tagFormatted = "South America";
                                                                                    } else if (tag == "europe"){
                                                                                        tagFormatted = "Europe";
                                                                                    } else if (tag == "africa"){
                                                                                        tagFormatted = "Africa";
                                                                                    } else if (tag == "asia"){
                                                                                        tagFormatted = "Asia";
                                                                                    }
                                                                                    
                                                                                    /*List all corresponding photoTags*/
                                                                                    return (
                                                                                        <li className="list-inline-item px-sm-3 mr-0"  key={index}>
                                                                                            <Link to={"/blog-destinations/"+tag} className="text-secondary">{tagFormatted}</Link>{/*need to fix so modal closes AND link works (only one will work now)*/}
                                                                                        </li>
                                                                                    );
                                                                                })
                                                                            }
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

Gallery.propTypes = {
    match: PropTypes.object
};