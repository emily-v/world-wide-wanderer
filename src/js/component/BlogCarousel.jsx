import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import InnerHTML from "dangerously-set-inner-html";
import Moment from "react-moment";

function BlogCarousel(props) {
	return (
		<div
			className={
				"carousel-item " + (props.postIndex === 0 ? "active" : "")
			}>
			<div className="card heroContentContainer">
				<img
					src={props.featuredImage}
					alt={props.alt_text}
					className="card-img-top"
				/>
				<div className="card-body">
					<h3 className="card-title postTitle">
						<Link
							className="text-dark"
							to={"/blog-post/" + props.postID}>
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

export default BlogCarousel;
