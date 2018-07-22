import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';




function YourCart(props){
    return (
        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Product name</h6>
                        <img src="https://via.placeholder.com/150x100"></img>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Second product</h6>
                        <img src="https://via.placeholder.com/150x100"></img>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Third item</h6>
                        <img src="https://via.placeholder.com/150x100"></img>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Sales Tax</h6>
                    </div>
                    <span className="text-muted">$0.73</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Shipping</h6>
                    </div>
                    <span className="text-muted">$3.99</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                </li>
            </ul>
    
            <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code"></input>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form>
        </div>

        
 );
    }
    

YourCart.propTypes = {
        productID: PropTypes.number,
        productName: PropTypes.string,
        productPrice: PropTypes.number,
        productImage: PropTypes.string,
        productDescription: PropTypes.string 
    };
    
export default YourCart;