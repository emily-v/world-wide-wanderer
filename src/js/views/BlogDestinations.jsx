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
        if (this.props.match.params.tag == 18){
            tagFormatted = "North America";
        } else if (this.props.match.params.tag == 19){
            tagFormatted = "United States";
        } else if (this.props.match.params.tag == 2){
            tagFormatted = "South America";
        } else if (this.props.match.params.tag == 17){
            tagFormatted = "Europe";
        } else if (this.props.match.params.tag == 20){
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
                                        state.isLoading ? (<p>Loading...</p>)
                                        :
                                        state.posts.map((item,index)=>{
                                            if (item.tags.includes(parseInt(this.props.match.params.tag))) {
                                                return <FeaturedPost 
                                                        key={index}
                                                        postID={item.id}
                                                        postTitle={item.title.rendered}
                                                        datePublished={item.date}
                                                        featuredImage={item._embedded['wp:featuredmedia']['0'].source_url}
                                                        alt_text={item._embedded['wp:featuredmedia']['0'].alt_text}
                                                        postExcerpt={item.excerpt.rendered}
                                                        postContent={item.content.rendered}
                                                        postCategory={item.categories}
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
            </div>
        );
    }
}

BlogDestinations.propTypes = {
    match: PropTypes.object,
    tags: PropTypes.array
};