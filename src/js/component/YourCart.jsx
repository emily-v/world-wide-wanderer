import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";

export class YourCart extends React.Component{
    
   constructor(){
       super();
       this.state ={
           
           discount:25,
           totalItems:0,
           totalPrice:0
           
       };
   } 

render(){
        
        return (
            <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    {/*<span className="badge badge-secondary badge-pill">{this.state.totalItems}</span>*/}
                </h4>
                <ul className="list-group mb-3">
                
                    <Consumer>
                        {({ state, actions }) => (state.cart.map((item, index) => {
                            return (
                
                                <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div> 
                                        <h6 className="my-0">{item.productName}</h6>
                                        <img style={{width:210}} src={item.productImage}></img>
                                        {/*<small className="text-muted">{item.productDescription}</small>*/}
                                    </div>
                                    <span className="text-muted">${item.productPrice}</span>
                                </li>
                     );
                        }))}
                    </Consumer>
                </ul>
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>{this.state.discount}%</small>
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
                        <span className="text-muted">Free</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>{(this.state.totalPrice - this.state.discount/100 * this.state.totalPrice).toFixed(2)}</strong>
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
    }
    

YourCart.propTypes = {
        productID: PropTypes.number,
        productName: PropTypes.string,
        productPrice: PropTypes.number,
        productImage: PropTypes.string,
        productDescription: PropTypes.string 
    };
    
export default YourCart;