import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Consumer } from "../stores/AppContext.jsx";


function OrderSummary(props) {
    console.log("HERE SHOULD BE THE DATA THAT YOU SENT AS A PROP:", props);
    return (
        
        <div className="card text-center">
            <div className="col-xl-12">
                <div className="card-body">
                    <h3 className="card-title text-center">Thank you for your order!</h3>
                    <p className="card-text text-center">Your order number is: {props.orderKey}</p>
                    <hr></hr>
                    <h2 className="card-title">Order Summary</h2>
                    <hr></hr>
                    <p className="card-text"><strong> Qty: {props.lineItems}</strong></p>
                </div>
                <ul className="list-group list-group-flush">
                    {/*<li className="list-group-item"><strong>Subtotal:</strong> ${(actions.flyByNight())}</li>*/}
                    <li className="list-group-item"><strong>Shipping:</strong> Free </li>
                    <li className="list-group-item"><strong>Sales Tax:</strong> $0.00</li>
                </ul>
                <div className="card-body">
                    <h3 className="card-title">Order Total: ${props.total}</h3>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-success"><Link to={"/storehome"} className="text-light">Continue Shopping</Link></button>
                </div>
            </div>
        </div>

    );
}


OrderSummary.propTypes = {
    productImage: PropTypes.string,
    total: PropTypes.number,
    orderKey: PropTypes.object,
    lineItems: PropTypes.array,
    orderFinal: PropTypes.object
};

export default OrderSummary;