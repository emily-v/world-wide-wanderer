import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Navbar from '../component/Navbar.jsx';
import ShoppingCartProduct from '../component/ShoppingCartProduct.jsx';

import {Consumer} from "../stores/AppContext.jsx";




//create your first component
export class ShoppingCart extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className ="row pt-4">
                        <div className ="col-md-12">
                            <div className ="panel panel-info">
                                <div className ="panel-heading">
                                    <div className ="panel-title">
                                        <div className ="row">
                                            <div className ="col-md-10">
                                                <h3>Shopping Cart</h3>
                                            </div>
                                            <div className ="col-xs-6">
                                                <button type="button" className ="btn btn-sm" ><Link to={"/storehome"} className="text-dark">Continue Shopping</Link></button>
                                                {/*<button type="button" className ="btn btn-primary">Continue shopping</button>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <Consumer>
                                    {({ state, actions }) => 
                                        (
                                            state.cart.map((item,index)=>{
                                                return <ShoppingCartProduct
                                                key={index}
                                                productID={item.productID}
                                                productName={item.productName}
                                                productPrice={item.productPrice}
                                                productImage={item.productImage}
                                                productDescription= {item.productDescription}
                                                />;
                                            })
                                        )
                                    }
                                </Consumer>
                            </div>
                            {/*<div className="text-center">
                                <div className="col-xs-9">
                                    <h6 className="text-right">Added items?</h6>
                                </div>
                                <div className="col-xs-12">
                                    <button type="button" className="btn btn-default btn-sm">
                                    Update cart
                                    </button>
                                </div>
                            </div>*/}
                            <div className ="panel-footer">
                                <div className ="row text-center">
                                    <div className ="col-sm-9">
                                        <h4 className ="text-right">Total <strong>$50.00</strong></h4>
                                    </div>
                                    <div className ="col-sm-3">
                                        <button type="button" className="btn btn-success btn-block"><Link to={"/checkout"} className="text-light">Checkout</Link></button>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-9 p-md-5">
                            {/*-----BEGIN HERO CONTENT-----*/}
                            {/*--Card Carousel Format--*/}
                            <h3 className="pr-1">Featured Post</h3>
                            <div className="carousel slide" id="carouselControls" data-ride="carousel">
                                <div className="carousel-inner">
                                    <Consumer>
                                        {({ state, actions }) => 
                                            (
                                                state.posts.map((item,index)=>{
                                                    return <BlogCarousel 
                                                            key={index}
                                                            postIndex={index}
                                                            postID={item.postID}
                                                            postTitle={item.postTitle}
                                                            datePublished={item.datePublished}
                                                            featuredImage={item.featuredImage}
                                                            postContent={item.postContent}
                                                            postCategory={item.postCategory}
                                                            postTags={item.postTags}
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
                <img src={props.featuredImage} alt="post featured image" className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title postTitle"><Link className="text-dark" to={"/blog-post/"+props.postID}>{props.postTitle}</Link></h3>
                    <p className="card-text text-secondary datePublished">{props.datePublished}</p>
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
        datePublished: PropTypes.string,
        postContent: PropTypes.string
    };


ShoppingCart.propTypes = {
        
    };