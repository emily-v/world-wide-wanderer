import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-inner-html';
import Moment from 'react-moment';

function FeaturedPost(props){
    return (
        <div>
            <div className="bottomBorder featuredPostContainer">
                <h1 className="my-3 postTitle">
                    <Link className="text-dark" to={"/blog-post/"+props.postID}>
                        <InnerHTML html={props.postTitle} />
                    </Link>
                </h1>
                <div className="text-center postImageContainer">
                    <img src={props.featuredImage} alt={props.alt_text} className="img-fluid pb-3"/>{/*HOW TO MAKE ALT SHOW IMAGE ALT TEXT? (ALT FIELD NOT SHOWING IN JSON)*/}
                </div>
                <p className="text-secondary datePublished">
                    <Moment format="MMMM D, YYYY">
                        {props.datePublished}
                    </Moment>
                </p>
                <p className="featuredPostTextBlock">
                    <Link className="text-dark" to={"/blog-post/"+props.postID}>
                        <InnerHTML html={props.postExcerpt} />
                    </Link>
                </p>
            </div>
        </div>
    );
}

FeaturedPost.propTypes = {
        postID: PropTypes.number,
        postTitle: PropTypes.string,
        featuredImage: PropTypes.string,
        alt_text: PropTypes.string,
        datePublished: PropTypes.string,
        postExcerpt: PropTypes.string
    };

export default FeaturedPost;

