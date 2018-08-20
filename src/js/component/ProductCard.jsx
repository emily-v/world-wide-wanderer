import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";


function ProductCard(props){
    return (
  
        
        <div className="card h-100">
            <Link className="text-primary" to= {"/singleproduct/"+props.productID}><img className="card-img-top img-fluid" src={props.productImage} alt=""></img></Link>
            <div className="card-body">
                <h4 className="card-title">
                    <Link className="text-primary" to= {"/singleproduct/"+props.productID}>{props.productName}</Link>
                </h4>
                <h5>${parseFloat(props.productPrice)}</h5>
                <p className="card-text">{props.productDescription}</p>
                <Consumer>
                    {
                                ({actions}) =>{
                                return    <button className="btn btn-success" onClick={()=>actions.addProductToCart (props.productID)}>Add to cart</button>;
                                }
                            }
                </Consumer> 
            </div>
            <div className="card-footer">
                <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
        </div>
        
                
 );
    }
    

ProductCard.propTypes = {
        productID: PropTypes.number,
        productName: PropTypes.string,
        productPrice: PropTypes.string,
        productImage: PropTypes.string,
        productDescription: PropTypes.string
    
    };
    
export default ProductCard;
