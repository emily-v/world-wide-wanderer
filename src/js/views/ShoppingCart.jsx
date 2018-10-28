import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar.jsx";
import ShoppingCartProduct from "../component/ShoppingCartProduct.jsx";
import BlogCarousel from "../component/BlogCarousel.jsx";
import Footer from "../component/Footer.jsx";

import { Consumer } from "../stores/AppContext.jsx";

//create your first component
export class ShoppingCart extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="row pt-4">
						<div className="col-md-12">
							<div className="panel panel-info">
								<div className="panel-heading">
									<div className="panel-title">
										<div className="row">
											<div className="col-md-10">
												<h3>Shopping Cart</h3>
											</div>
											<div className="col-xs-6">
												<button
													type="button"
													className="btn btn-sm">
													<Link
														to={"/storehome"}
														className="text-dark">
														Continue Shopping
													</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
								<hr />
								<Consumer>
									{({ state, actions }) =>
										state.cart.map((item, index) => {
											return (
												<ShoppingCartProduct
													key={index}
													productID={item.id}
													productName={item.name}
													productPrice={item.price}
													productImage={item.img_src}
													productDescription={
														item.description
													}
													/*clickEvent={ (index) => this.deleteProduct(index)}*/
												/>
											);
										})
									}
								</Consumer>
							</div>

							<Consumer>
								{({ actions }) => (
									<div className="panel-footer">
										<div className="row text-center">
											<div className="col-sm-9">
												<h4 className="text-right">
													Total{" "}
													<strong>
														$ {actions.flyByNight()}
													</strong>
												</h4>
											</div>
											<div className="col-sm-3">
												<button
													type="button"
													className="btn btn-success btn-block">
													<Link
														to={"/checkout"}
														className="text-light">
														Checkout
													</Link>
												</button>
											</div>
										</div>
									</div>
								)}
							</Consumer>
							<hr />
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row justify-content-md-center">
						<div className="col-12 col-md-9 p-md-5">
							{/*-----BEGIN HERO CONTENT-----*/}
							{/*--Card Carousel Format--*/}
							<h3 className="pr-1">Featured Post</h3>
							<div
								className="carousel slide"
								id="carouselControls"
								data-ride="carousel">
								<div className="carousel-inner">
									<Consumer>
										{({ state, actions }) =>
											state.isLoading ? (
												<p>Loading...</p>
											) : (
												state.posts.map(
													(item, index) => {
														return (
															<BlogCarousel
																key={index}
																postIndex={
																	index
																}
																postID={item.id}
																postTitle={
																	item.title
																		.rendered
																}
																datePublished={
																	item.date
																}
																featuredImage={
																	item
																		._embedded[
																		"wp:featuredmedia"
																	]["0"]
																		.source_url
																}
																postExcerpt={
																	item.excerpt
																		.rendered
																}
																postCategory={
																	item.categories
																}
																postTags={
																	item.tags
																}
																author={
																	item.author
																}
															/>
														);
													}
												)
											)
										}
									</Consumer>
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselControls"
									role="button"
									data-slide="prev">
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									/>
									<span className="sr-only">Previous</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselControls"
									role="button"
									data-slide="next">
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									/>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

ShoppingCart.propTypes = {
	productPrice: PropTypes.number
};
