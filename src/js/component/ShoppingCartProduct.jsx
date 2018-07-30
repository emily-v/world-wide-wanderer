import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fastrash } from '@fortawesome/free-solid-svg-icons';


import {Consumer} from "../stores/AppContext.jsx";


function ShoppingCartProduct(props){
    return (
                            
        <Consumer>
            {({ state, actions }) => (state.cart.map((item, index) => {
                return (
                    <div className ="panel-body" key={index}>
                        <div className ="row">
                            <div className ="col-md-4"><img className="img-responsive" style={{width:150}} src={item.productImage}></img>
                            </div>
                            <div className ="col-md-4">
                                <h4 className ="product-name"><strong>{item.productName}</strong></h4><h4><small>{item.productDescription}</small></h4>
                            </div>
                            <div className ="col-md-4">
                                {/*<div className ="col-sm-6 text-right">*/}
                                <h6><strong>${item.productPrice} <span className="text-muted">x</span></strong></h6>
                                {/*</div>*/}
                                <div className ="col-sm-4">
                                    <input type="text" className="form-control input-sm" defaultValue="1" ></input>
                                </div>
                                {/*<button type="button" className="btn btn-default btn-lg" aria-label="Right Align"><FontAwesomeIcon icon="fastrash" /></button>*/}
                                <button type="button" className="btn btn-outline-secondary">Remove</button>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                        
                     );
                }))}
        </Consumer>
                               
            );
}
    

ShoppingCartProduct.propTypes = {
        productID: PropTypes.number,
        productName: PropTypes.string,
        productPrice: PropTypes.number,
        productImage: PropTypes.string,
        productDescription: PropTypes.string
    
    };
    
export default ShoppingCartProduct;
