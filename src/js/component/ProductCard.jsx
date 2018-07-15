import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';




function ProductCard(props){
    return (
  
        <div className="col-lg-4 col-md-6 mb-4 pt-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">Item One</a>
                    </h4>
                    <h5>$20.00</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
            </div>
        </div>
                
 );
    }
    

ProductCard.propTypes = {
    
    };
    
export default ProductCard;
