import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';

export class MainHome extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9 border-right p-md-5 mainContentContainer">
                            {/*-----BEGIN HERO CONTENT-----*/}
                            <div className="carousel slide" id="carouselControls" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card heroContentContainer">
                                            <img src="http://via.placeholder.com/800x500" alt="post featured image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h3 className="card-title postTitle"><Link className="text-dark" to={"/blog-post"}>Title of Current Featured Blog Post in Carousel</Link></h3>
                                                <p className="card-text text-secondary datePublished">May 15, 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card heroContentContainer">
                                            <img src="http://via.placeholder.com/800x500" alt="post featured image" className="card-img-top"/>
                                            <div className="card-body">
                                                <h3 className="card-title postTitle"><Link className="text-dark" to={"/blog-post"}>2nd Title of Current Featured Blog Post in Carousel</Link></h3>
                                                <p className="card-text text-secondary datePublished">May 15, 2018</p>
                                            </div>
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
                            </div>
                            
                            {/*<div className="carousel slide" id="carouselControls" data-ride="carousel">
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
                            </div>*/}
                            
                            {/* ---HERO CARD FORMAT ALTERNATIVE---
                            <div className="card heroContentContainer">
                                <img src="http://via.placeholder.com/800x500" alt="post featured image" className="card-img-top"/>
                                <div className="card-body">
                                    <h3 className="card-title postTitle"><Link className="text-dark" to={"/blog-post"}>Title of Current Featured Blog Post in Carousel</Link></h3>
                                    <p className="card-text text-secondary datePublished">May 15, 2018</p>
                                </div>
                            </div>*/}
                            
                            {/*-----WELCOME MESSAGE-----*/}
                            <p className="border-top border-bottom py-3 lead welcomeMessage"><strong>Welcome! </strong>Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom.</p>
                            {/*-----BEGIN FEATURED CONTENT SECTION-----*/}
                            <div className="row featuredContentContainer">
                                {/*-----BEGIN FEATURED POSTS CARD-----*/}
                                <div className="col-md-6 mainFeaturedContainer">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h4><Link to={"/blog-home"} className="text-dark">Featured Posts</Link></h4>
                                            <button className="btn btn-sm"><Link to={"/blog-home"} className="text-dark">See more</Link></button>
                                        </div>
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-4 px-2">
                                                    <Link to={"/blog-post"}><img className="img-fluid" src="http://via.placeholder.com/100x100" alt="post thumbnail image" /></Link>
                                                </div>
                                                <div className="col px-2">
                                                    <p className="mb-1"><Link className="text-dark" to={"/blog-post"}>This is the Title of a Featured Blog Post</Link></p>
                                                    <p className="small mb-1">May 16, 2018</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-4 px-2">
                                                    <img className="img-fluid" src="http://via.placeholder.com/100x100" alt="post thumbnail image" />
                                                </div>
                                                <div className="col px-2">
                                                    <p className="mb-1">This is the Slighty Longer Title of a Featured Blog Post</p>
                                                    <p className="small mb-1">May 16, 2018</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-4 px-2">
                                                    <img className="img-fluid" src="http://via.placeholder.com/100x100" alt="post thumbnail image" />
                                                </div>
                                                <div className="col px-2">
                                                    <p className="mb-1">This is the Title of a Featured Blog Post</p>
                                                    <p className="small mb-1">May 16, 2018</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*-----BEGIN FEATURED PRODUCTS CARD-----*/}
                                <div className="col-md-6 mainFeaturedContainer">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h4><Link to={"/storehome"} className="text-dark">Featured Products</Link></h4>
                                            <button className="btn btn-sm"><Link to={"/storehome"} className="text-dark">See more</Link></button>
                                        </div>
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-4 px-2">
                                                    <Link to="#"><img className="img-fluid" src="http://via.placeholder.com/100x100" alt="product thumbnail image" /></Link>
                                                </div>
                                                <div className="col px-2">
                                                    <p className="mb-1"><Link to="#" className="text-dark">Name of Featured Product</Link></p>
                                                    <p className="small mb-1">$15.00</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-4 px-2">
                                                    <img className="img-fluid" src="http://via.placeholder.com/100x100" alt="product thumbnail image" />
                                                </div>
                                                <div className="col px-2">
                                                    <p className="mb-1">Slightly Longer Name of Featured Product</p>
                                                    <p className="small mb-1">$15.00</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-4 px-2">
                                                    <img className="img-fluid" src="http://via.placeholder.com/100x100" alt="product thumbnail image" />
                                                </div>
                                                <div className="col px-2">
                                                    <p className="mb-1">Name of Featured Product</p>
                                                    <p className="small mb-1">$15.00</p>
                                                </div>
                                            </div>
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
