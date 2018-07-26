import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import FeaturedPost from '../component/FeaturedPost.jsx';

import {Consumer} from "../stores/AppContext.jsx";

export class BlogArchive extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9 border-right p-md-5 blogHomeContentContainer">
                            <h3 className="text-secondary">{this.props.match.params.year}</h3>
                            <Consumer>
                                {({ state, actions }) => 
                                    (
                                        state.posts.map((item,index)=>{
                                        //USE FILTER OR IF
                                            if (item.datePublished.includes(this.props.match.params.year)) {
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

BlogArchive.propTypes = {
    match: PropTypes.object
};