import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-inner-html';
import Moment from 'react-moment';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';

import {Consumer} from "../stores/AppContext.jsx";

export class MainHome extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9 border-right p-md-5 mainContentContainer">
                            {/*-----BEGIN HERO CONTENT-----*/}
                            {/*--Card Carousel Format--*/}
                            <div className="carousel slide" id="carouselControls" data-ride="carousel">
                                <div className="carousel-inner">
                                    <Consumer>
                                        {({ state, actions }) => 
                                            (
                                                state.isLoading ? (<p>Loading...</p>)
                                                :
                                                state.posts.map((item,index)=>{
                                                    return <BlogCarousel 
                                                            key={index}
                                                            postIndex={index}
                                                            postID={item.id}
                                                            postTitle={item.title.rendered}
                                                            datePublished={item.date}
                                                            featuredImage={item._embedded['wp:featuredmedia']['0'].source_url}
                                                            alt_text={item._embedded['wp:featuredmedia']['0'].alt_text}
                                                            postExcerpt={item.excerpt.rendered}
                                                            postCategory={item.categories}
                                                            postTags={item.tags}
                                                            author={item.author}
                                                            />;
                                                })
                                            )
                                        }
                                    </Consumer>
                                </div>
                                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            
                            {/*-----WELCOME MESSAGE-----*/}
                            <p className="border-top border-bottom py-3 lead welcomeMessage"><strong>Welcome! </strong>Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom.</p>
                            {/*-----BEGIN FEATURED CONTENT SECTION-----*/}
                            <div className="row featuredContentContainer">
                                <div className="card-deck">                                
                                    {/*-----BEGIN FEATURED POSTS CARD-----*/}
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h4><Link to={"/blog-home"} className="text-dark">Featured Posts</Link></h4>
                                            <button className="btn btn-sm"><Link to={"/blog-home"} className="text-dark">See more</Link></button>
                                        </div>
                                        <div className="card-body">
                                            <Consumer>
                                                {({ state, actions }) => 
                                                    (
                                                        state.posts.map((item,index)=>{
                                                            if (index <= 2) {
                                                                return <FeaturedPostSmall 
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
                                    </div>
                                    {/*-----BEGIN FEATURED PRODUCTS CARD-----*/}
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h4><Link to={"/storehome"} className="text-dark">Featured Products</Link></h4>
                                            <button className="btn btn-sm"><Link to={"/storehome"} className="text-dark">See more</Link></button>
                                        </div>
                                        <div className="card-body">
                                            <Consumer>
                                                {({ state, actions }) => 
                                                    (
                                                        state.products.map((item,index)=>{
                                                            if (index <= 2) {
                                                                return <FeaturedProductSmall 
                                                                        key={index}
                                                                        productID={item.productID}
                                                                        productName={item.productName}
                                                                        productPrice={item.productPrice}
                                                                        productImage={item.productImage}
                                                                        productDescription={item.productDescription}
                                                                        />;
                                                            }            
                                                        })
                                                    )
                                                }
                                            </Consumer>    
                                        </div>
                                    </div>
                                </div>
                                {/*---end featured products card section---*/}
                            </div>
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

function BlogCarousel(props){
    return(
        <div className={"carousel-item " + (props.postIndex === 0 ? "active" : "")}>
            <div className="card heroContentContainer">
                <img src={props.featuredImage} alt={props.alt_text} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title postTitle">
                        <Link className="text-dark" to={"/blog-post/"+props.postID}>
                            <InnerHTML html={props.postTitle} />
                        </Link>
                    </h3>
                    <p className="card-text text-secondary datePublished">
                        <Moment format="MMMM D, YYYY">
                            {props.datePublished}
                        </Moment>
                    </p>
                </div>
            </div>
        </div>
    );
}

BlogCarousel.propTypes = {
        postIndex: PropTypes.number,
        postID: PropTypes.number,
        postTitle: PropTypes.string,
        featuredImage: PropTypes.string,
        alt_text: PropTypes.string,
        datePublished: PropTypes.string,
        postContent: PropTypes.string
    };
    
function FeaturedPostSmall(props){
    return(
        <div className="row mb-3">
            <div className="col-4 px-2 align-self-center">
                <Link to={"/blog-post/"+props.postID}><img className="img-fluid img-thumbnail" src={props.featuredImage} alt={props.alt_text} /></Link>
            </div>
            <div className="col px-2">
                <p className="mb-1">
                    <Link className="text-dark" to={"/blog-post/"+props.postID}>
                        <InnerHTML html={props.postTitle} />
                    </Link>
                </p>
                <p className="small mb-1">
                    <Moment format="MMMM D, YYYY">
                        {props.datePublished}
                    </Moment>
                </p>
            </div>
        </div>
    );
}

FeaturedPostSmall.propTypes = {
        postIndex: PropTypes.number,
        postID: PropTypes.number,
        postTitle: PropTypes.string,
        featuredImage: PropTypes.string,
        alt_text: PropTypes.string,
        datePublished: PropTypes.string,
        postContent: PropTypes.string
    };
    
function FeaturedProductSmall(props){
    return(
        <div className="row mb-3">
            <div className="col-4 px-2">
                <Link to={"/singleproduct/"+props.productID}><img className="img-fluid img-thumbnail" src={props.productImage} alt="product thumbnail image" /></Link>
            </div>
            <div className="col px-2">
                <p className="mb-1"><Link to={"/singleproduct/"+props.productID} className="text-dark">{props.productName}</Link></p>
                <p className="small mb-1">${props.productPrice}</p>
            </div>
        </div>
    );
}

FeaturedProductSmall.propTypes = {
        productIndex: PropTypes.number,
        productID: PropTypes.number,
        productName: PropTypes.string,
        productImage: PropTypes.string,
        productPrice: PropTypes.number
    };

    
    /*--Image with Overlaid Caption Carousel Format--
        <div className="carousel slide" id="carouselControls" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="http://via.placeholder.com/800x500" alt="post featured image" className="img-fluid d-block w-100"/>
                    <div className="carousel-caption d-block pb-0 text-left">
                        <h3 className="postTitle"><Link className="text-dark" to={"/blog-post"}>Title of Current Featured Blog Post in Carousel</Link></h3>
                        <p className="mb-0 datePublished">May 15, 2018</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="http://via.placeholder.com/800x500" alt="post featured image" className="img-fluid d-block w-100"/>
                    <div className="carousel-caption d-block pb-0 text-left">
                        <h3 className="postTitle"><Link className="text-dark" to={"/blog-post"}>2nd Title of Current Featured Blog Post in Carousel</Link></h3>
                        <p className="mb-0 datePublished">May 15, 2018</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>*/