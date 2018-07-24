import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';

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
                                    var selected = state.posts.filter(item=>item.postID === parseInt(this.props.match.params.theid));
                                    var post = selected[0];
                                    if (selected.length <= 0){
                                        return <h3>Loading....</h3>;
                                    }
                                        return(
                                            <div className="col-12 col-md-9 border-right p-md-5 postContentContainer">
                                                <h1 className="my-3 postTitle">{post.postTitle}</h1>
                                                <div className="text-center postImageContainer">
                                                    <img src={post.featuredImage} alt="post featured image" className="img-fluid pb-3"/>
                                                </div>
                                                <p className="text-secondary datePublished">{post.datePublished}</p>
                                                <p className="text-secondary author">Author: {post.author}</p>
                                                <p className="postTextBlock">{post.postContent}</p>
                                                <div className="text-center postImageContainer">
                                                    <img src="http://via.placeholder.com/800x500" alt="post content image" className="img-fluid pb-3"/>
                                                </div>
                                                <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
                                                <h3>This is a subtitle or section header</h3>
                                                <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
                                                <div className="row postImageContainer">
                                                    <div className="col-md-6">
                                                        <img src="http://via.placeholder.com/500x350" alt="post content image" className="img-fluid pb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src="http://via.placeholder.com/500x350" alt="post content image" className="img-fluid pb-3"/>
                                                    </div>
                                                </div>
                                                <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
                                                <br />
                                                <br />
                                                <p className="text-center">
                                                    <Link className="text-dark" to={"/blog-home"}>Return to Featured Posts</Link>
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
            </div>
        );
    }
}

BlogPost.propTypes = {
    match: PropTypes.object
};

/*<div className="container-fluid">
    <div className="row">
        <div className="col-12 col-md-9 border-right p-md-5 postContentContainer">
            <h1 className="my-3 postTitle">This is the Title of an Individual Blog Post</h1>
            <div className="text-center postImageContainer">
                <img src="http://via.placeholder.com/800x500" alt="post featured image" className="img-fluid pb-3"/>
            </div>
            <p className="text-secondary datePublished">May 15, 2018</p>
            <p className="text-secondary author">Emily V.</p>
            <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
            <div className="text-center postImageContainer">
                <img src="http://via.placeholder.com/800x500" alt="post content image" className="img-fluid pb-3"/>
            </div>
            <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
            <h3>This is a subtitle or section header</h3>
            <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
            <div className="row postImageContainer">
                <div className="col-md-6">
                    <img src="http://via.placeholder.com/500x350" alt="post content image" className="img-fluid pb-3"/>
                </div>
                <div className="col-md-6">
                    <img src="http://via.placeholder.com/500x350" alt="post content image" className="img-fluid pb-3"/>
                </div>
            </div>
            <p className="postTextBlock">Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.</p>
            <br />
            <br />
            <p className="text-center">
                <Link className="text-dark" to={"/blog-home"}>Return to Featured Posts</Link>
            </p>
        </div>
        <div className="col-md-3">
            <BlogSidebar />
        </div>
    </div>
</div>
</div>*/