import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import FeaturedPost from '../component/FeaturedPost.jsx';
import Footer from '../component/Footer.jsx';

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
                                            if (item.date.includes(this.props.match.params.year)) {
                                                return <FeaturedPost 
                                                        key={index}
                                                        postID={item.id}
                                                        postTitle={item.title.rendered}
                                                        datePublished={item.date}
                                                        featuredImage={item._embedded['wp:featuredmedia']['0'].source_url}
                                                        alt_text={item._embedded['wp:featuredmedia']['0'].alt_text}
                                                        postExcerpt={item.excerpt.rendered}
                                                        postContent={item.content.rendered}
                                                        postTags={item.tags}
                                                        author={item.author}
                                                        />;
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
                <Footer />
            </div>
        );
    }
}

BlogArchive.propTypes = {
    match: PropTypes.object
};