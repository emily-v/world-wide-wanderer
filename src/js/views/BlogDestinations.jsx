import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import FeaturedPost from '../component/FeaturedPost.jsx';

import {Consumer} from "../stores/AppContext.jsx";

export class BlogDestinations extends React.Component{
    
    render(){
        
        var tagFormatted = "";
        if (this.props.match.params.tag == "northamerica"){
            tagFormatted = "North America";
        } else if (this.props.match.params.tag == "unitedstates"){
            tagFormatted = "United States";
        } else if (this.props.match.params.tag == "southamerica"){
            tagFormatted = "South America";
        } else if (this.props.match.params.tag == "europe"){
            tagFormatted = "Europe";
        } else if (this.props.match.params.tag == "africa"){
            tagFormatted = "Africa";
        } else if (this.props.match.params.tag == "asia"){
            tagFormatted = "Asia";
        }
        
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9 border-right p-md-5 blogHomeContentContainer">
                            <h3 className="text-secondary">{tagFormatted}</h3>
                            <Consumer>
                                {({ state, actions }) => 
                                    (
                                        state.posts.map((item,index)=>{
                                            if (item.postTags.includes(this.props.match.params.tag)) {
                                                return (
                                                    <div>
                                                        
                                                        <FeaturedPost 
                                                            key={index}
                                                            postID={item.postID}
                                                            postTitle={item.postTitle}
                                                            datePublished={item.datePublished}
                                                            featuredImage={item.featuredImage}
                                                            postContent={item.postContent}
                                                            postCategory={item.postCategory}
                                                            postTags={item.postTags}
                                                            author={item.author}
                                                            />
                                                    </div>  
                                                );
                                            }
                                        })
                                    )
                                }
                            </Consumer>
                        </div>
                        <div className="col-md-3">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BlogDestinations.propTypes = {
    match: PropTypes.object
};