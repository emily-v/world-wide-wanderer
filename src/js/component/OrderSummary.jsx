import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';




function OrderSummary(props){
    return (
        
        <div className="card pt-4">
            <div className="card-body">
                <h2 className="card-title">Order Summary</h2>
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/150x100"></img></a>
                <hr></hr>
                <p className="card-text"><strong> Qty: 1</strong></p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Subtotal:</strong> $10.00</li>
                <li className="list-group-item"><strong>Shipping:</strong> Free </li>
                <li className="list-group-item"><strong>Sales Tax:</strong> $0.73 </li>
            </ul>
            <div className="card-body">
                <h3 className="card-title">Order Total: $10.73 </h3>
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