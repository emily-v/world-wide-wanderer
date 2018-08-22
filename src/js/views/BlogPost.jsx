import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-inner-html';
import Moment from 'react-moment';

import Navbar from '../component/Navbar.jsx';
import ProductCard from '../component/ProductCard.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";

export class BlogPost extends React.Component{
    
    render(){
 
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Consumer>
                            {({ state, actions }) => 
                                {
                                    
                                    var selected = state.posts.filter(item=>item.id === parseInt(this.props.match.params.theid));
                                    var post = selected[0];
                                    
                                    if (post.author===1){
                                        var authorName = "Emily V";
                                    }
                                    
                                    if (selected.length <= 0){
                                        return <h3>Loading....</h3>;
                                    } 
                                        return(
                                            <div className="col-12 col-md-9 px-md-5 pb-md-5 mt-md-5 sidebarBorder">
                                                <h1 className="my-3 postTitle">
                                                    <InnerHTML html={post.title.rendered} />
                                                </h1>
                                                <div className="text-center postImageContainer">
                                                    <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post._embedded['wp:featuredmedia']['0'].alt_text} className="img-fluid pb-3"/>
                                                </div>
                                                <p className="text-secondary datePublished"><Moment format="MMMM D, YYYY">{post.date}</Moment></p>
                                                <p className="text-secondary author">Author: {authorName}</p>
                                                <div className="postTextBlock">
                                                    <InnerHTML html={post.content.rendered} />
                                                </div>
                                                
                                                {
                                                    state.products.map((item,index)=>{
                                                        if (index==0){
                                                            return (
                                                                <div className="col-lg-4 col-md-6 mb-4 pt-4" key={index}>
                                                                    <ProductCard
                                                                            //key={index}
                                                                            productID={item.id}
                                                                            productName={item.name}
                                                                            productPrice={item.price}
                                                                            productImage={item.img_src}
                                                                            productDescription= {item.description}
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                                
                                                <p className="text-center mt-5">
                                                    <Link className="text-dark" to={"/blog-home"}>Return to All Posts</Link>
                                                </p>
                                            </div>
                                        );
                                }
                            }
                        </Consumer>
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

BlogPost.propTypes = {
    match: PropTypes.object
};

