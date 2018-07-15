import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';




function OrderSummary(props){
    return (
        
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Order Summary</h2>
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/140x100"></img></a>
                <p className="card-text">Qty: 1X $10.00</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Item Total:</li>
                <li className="list-group-item">Shipping:</li>
                <li className="list-group-item">Taxes:</li>
            </ul>
            <div className="card-body">
                <h3 className="card-title">Order Total:</h3>
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-success">Continue Shopping</button>
            </div>
        </div>
  
        
 );
    }
    

OrderSummary.propTypes = {
    
    };
    
export default OrderSummary;