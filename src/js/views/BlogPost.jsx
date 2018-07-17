import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';

export class BlogPost extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9 postContentContainer">
                            <h1 className="text-center postTitle">This is the Title of an Individual Blog Post</h1>
                            <img src="http://via.placeholder.com/500x350" alt="post featured image" className="img-fluid"/>
                            <p className="text-light datePublished">May 15, 2018</p>
                            <p className="text-light author">Emily V.</p>
                            <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
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