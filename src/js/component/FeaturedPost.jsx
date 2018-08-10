import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function FeaturedPost(props){
    return (
        <div>
            <div className="border-bottom featuredPostContainer">
                <h1 className="my-3 postTitle"><Link className="text-dark" to={"/blog-post/"+props.postID}>{props.postTitle}</Link></h1>
                <div className="text-center postImageContainer">
                    <img src={props.featuredImage} className="img-fluid pb-3"/>{/*HOW TO MAKE ALT SHOW IMAGE ALT TEXT? (ALT FIELD NOT SHOWING IN JSON)*/}
                </div>
                <p className="text-secondary datePublished">{props.datePublished}</p>
                <p className="featuredPostTextBlock">{props.postExcerpt}
                    <Link className="text-dark" to={"/blog-post/"+props.postID}>...read more</Link>
                </p>
            </div>
        </div>
    );
}

FeaturedPost.propTypes = {
        postID: PropTypes.number,
        postTitle: PropTypes.string,
        featuredImage: PropTypes.string,
        datePublished: PropTypes.string,
        postExcerpt: PropTypes.string
    };

export default FeaturedPost;

