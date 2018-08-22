import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Consumer } from "../stores/AppContext.jsx";


function OrderSummary(props) {
    {/*console.log("HERE SHOULD BE THE DATA THAT YOU SENT AS A PROP:", props);*/}
    return (
        
        <div className="card text-center">
            <div className="col-xl-12 pt-25">
                <div className="card-body">
                    <img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/Thank-You-1.png" alt="logo" className="mx-auto d-block"/>
                    <h1 className="card-text text-center">Your order number is: {props.orderFinal.number}</h1>
                    <hr></hr>
                    <h3 className="card-title">Order Summary</h3>
                    <hr></hr>
                    <p className="card-text"><strong> Qty: {props.orderFinal.line_items.length}</strong></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Shipping:</strong> Free </li>
                    <li className="list-group-item"><strong>Sales Tax:</strong> $0.00</li>
                </ul>
                <div className="card-body">
                    <h3 className="card-title">Order Total: ${props.orderFinal.total}</h3>
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
    number: PropTypes.number,
    line_items: PropTypes.array,
    orderFinal: PropTypes.object
};

export default OrderSummary;