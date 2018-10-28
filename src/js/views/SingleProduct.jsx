import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

import { Consumer } from "../stores/AppContext.jsx";

//create your first component
export class SingleProduct extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container pt-20">
					<div className="row d-flex flex-row">
						<Consumer>
							{({ state, actions }) => {
								var selected = state.products.filter(item => {
									return (
										item.id ===
										parseInt(this.props.match.params.theid)
									);
								});

								if (selected.length <= 0) {
									return <h3>Loading....</h3>;
								}
								var products = selected[0];
								return (
									<React.Fragment>
										{typeof state.session.token ===
										"undefined" ? (
											<div
												className="alert alert-info center-block"
												role="alert">
												<strong>Hello Wanderer!</strong>{" "}
												Thanks for checking out our
												shop, Please{" "}
												<Link
													to={"/signup-login"}
													className="text-dark font-weight-bold">
													Sign up or Login
												</Link>{" "}
												if you would like to view the
												items in your cart.
											</div>
										) : (
											<div />
										)}
										<div className="col-md-7">
											<h2>
												<strong>{products.name}</strong>
											</h2>
											{products.gallery.map(
												(item, index) => {
													return (
														<img
															className="pb-4 pr-5 img-responsive card-img-top"
															style={{
																width: 150
															}}
															src={item.src}
															key={index}
														/>
													);
												}
											)}
											{/*<img className="pr-4" src={products.productGallery}></img>
                                            <img className="pr-4" src={products.productGallery}></img>
                                            <img src={products.productGallery}></img>*/}
											<img
												className="pl-10 pt-3 pb-3 img-fluid"
												src={products.img_src}
											/>
										</div>
										<div className="col-md-5">
											<h2>
												<strong>Product Details</strong>
											</h2>
											<hr />
											<h5>
												Price: $
												{parseFloat(products.price)}
											</h5>
											<hr />
											<h5>Qty: 1</h5>
											<hr />
											<button
												type="button"
												className="btn btn-success dropdown-toggle"
												data-toggle="dropdown"
												aria-haspopup="true">
												1
											</button>
											<div className="dropdown-menu">
												<a
													className="dropdown-item"
													href="#">
													2
												</a>
												<a
													className="dropdown-item"
													href="#">
													3
												</a>
												<a
													className="dropdown-item"
													href="#">
													4
												</a>
											</div>

											<button
												type="button pl-6"
												className="btn btn-success"
												onClick={() =>
													actions.addProductToCart(
														products.id
													)
												}>
												Add to cart
											</button>

											<hr />
											<dl>
												<dt>Description</dt>
												<dd>{products.description}</dd>
												<dt>Size</dt>
												<dd>One size fits all.</dd>
												<hr />
											</dl>
											<button className="btn btn-sm">
												<Link
													to={"/storehome"}
													className="text-dark">
													See more
												</Link>
											</button>
										</div>
									</React.Fragment>
								);
							}}
						</Consumer>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

SingleProduct.propTypes = {
	match: PropTypes.object,
	gallery: PropTypes.array,
	productID: PropTypes.number
};
