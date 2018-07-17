import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function FeaturedPost(props){
    return (
        <div>
            <div className="border-bottom featuredPostContainer">
                <h1 className="my-3 postTitle"><Link className="text-dark" to={"/blog-post"}>This is the Title of a Featured Blog Post</Link></h1>
                <div className="text-center postImageContainer">
                    <img src="http://via.placeholder.com/800x500" alt="post featured image" className="img-fluid pb-3"/>
                </div>
                <p className="text-secondary datePublished">May 15, 2018</p>
                <p className="featuredPostTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.
                    <Link className="text-dark" to={"/blog-post"}>...read more</Link>
                </p>
            </div>
        </div>
    );
}

export default FeaturedPost;