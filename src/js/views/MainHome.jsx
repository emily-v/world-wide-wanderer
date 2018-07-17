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
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9 border-right p-md-5 mainContentContainer">
                            <div className="heroContentContainer">
                                <div className="text-center postImageContainer">
                                    <img src="http://via.placeholder.com/800x500" alt="post featured image" className="img-fluid pb-3"/>
                                </div>
                                <h1 className="my-3 postTitle"><Link className="text-dark" to={"/blog-post"}>Title of Current Featured Blog Post in Carousel</Link></h1>
                                <p className="text-secondary datePublished">May 15, 2018</p>
                            </div>
                            <p className="border-top border-bottom py-3 lead welcomeMessage"><strong>Welcome! </strong>Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom.</p>
                        </div>
                        <div className="col">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
