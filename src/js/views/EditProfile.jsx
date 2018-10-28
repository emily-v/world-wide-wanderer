import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "../component/Navbar.jsx";

export class EditProfile extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container-fluid">
					<div className="row justify-content-center pt-4">
						<div className="col-md-6">
							<div className="card my-3 mx-auto">
								<div className="card-header">
									<h4>Edit Profile</h4>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="userFirstName"
												className="col-sm-4 col-form-label font-weight-bold">
												First name
											</label>
											<div className="col-sm-8">
												<input
													type="text"
													className="form-control"
													id="userFirstName"
													placeholder="Firstname"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="userLastName"
												className="col-sm-4 col-form-label font-weight-bold">
												Last name
											</label>
											<div className="col-sm-8">
												<input
													type="text"
													className="form-control"
													id="userLastName"
													placeholder="Lastname"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="userEmail"
												className="col-sm-4 col-form-label font-weight-bold">
												Email
											</label>
											<div className="col-sm-8">
												<input
													type="text"
													className="form-control"
													id="userEmail"
													placeholder="email@email.com"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="userPassword"
												className="col-sm-4 col-form-label font-weight-bold">
												Password
											</label>
											<div className="col-sm-8">
												<input
													type="text"
													readOnly
													className="form-control-plaintext text-secondary"
													id="userPassword"
													value="Save profile to reset password"
												/>
											</div>
										</div>
										<div className="form-group row">
											<button
												type="submit"
												className="btn btn-outline-primary btn-block mx-2">
												<Link to={"/profile"}>
													Save changes
												</Link>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center pt-4">
						<button
							type="button"
							className="btn btn-outline-primary">
							Return to previous page
						</button>
					</div>
				</div>
			</div>
		);
	}
}
