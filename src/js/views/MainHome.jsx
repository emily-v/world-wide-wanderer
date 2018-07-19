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
                            <div className="heroContentContainer">
                                <div className="text-center postImageContainer">
                                    <img src="http://via.placeholder.com/800x500" alt="post featured image" className="img-fluid pb-3"/>
                                </div>
                                <h2 className="my-3 postTitle"><Link className="text-dark" to={"/blog-post"}>Title of Current Featured Blog Post in Carousel</Link></h2>
                                <p className="text-secondary datePublished">May 15, 2018</p>
                            </div>
                            <p className="border-top border-bottom py-3 lead welcomeMessage"><strong>Welcome! </strong>Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom.</p>
                            <div className="row featuredContentContainer">
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
