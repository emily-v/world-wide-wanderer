import React from "react";
import PropTypes from "prop-types";

import Navbar from "../component/Navbar.jsx";
import YourCart from "../component/YourCart.jsx";
import BillingInfo from "../component/BillingInfo.jsx";
import Footer from "../component/Footer.jsx";

import { Consumer } from "../stores/AppContext.jsx";

//create your first component
export class CheckOut extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container pt-4 pb-4">
					<div className="row">
						<YourCart />
						<BillingInfo />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

CheckOut.propTypes = {};
