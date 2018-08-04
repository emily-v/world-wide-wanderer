import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fastrash } from '@fortawesome/free-solid-svg-icons';


import {Consumer} from "../stores/AppContext.jsx";


function ShoppingCartProduct(props){
    

    return (
                            
        <Consumer>
        
            {({ actions }) => 
            (
               
        
                <div className ="panel-body">
                    <div className ="row">
                        <div className ="col-md-4"><img className="img-responsive" style={{width:150}} src={props.productImage}></img>
                        </div>
                        <div className ="col-md-4">
                            <h4 className ="product-name"><strong>{props.productName}</strong></h4><h4><small>{props.productDescription}</small></h4>
                        </div>
                        <div className ="col-md-4">
                            <h6><strong>${props.productPrice}</strong></h6><p className="text-muted">x</p>
                            <select className="cart-item-qty-select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>
                            <button type="button" className="btn btn-outline-secondary" onClick={()=>actions.deleteProduct (props.productID)}>Remove</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
              
            )
        }
            
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
