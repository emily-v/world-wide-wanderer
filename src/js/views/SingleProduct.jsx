import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Navbar from '../component/Navbar.jsx';

import {Consumer} from "../stores/AppContext.jsx";



//create your first component
export class SingleProduct extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container pt-20">
                    <div className="d-flex flex-row">
                        <Consumer>
                            {({ state, actions }) => {
                            
                            var selected = state.products.filter(item => {
                                return item.productID === parseInt (this.props.match.params.theid);
                            });
                            
                            if(selected.length <=0) {return <h3>Loading....</h3>;}
                            var products = selected[0];
                                return  (
                                    <React.Fragment>
                                        <div className="col-md-7">
                                            <h2><strong>{products.productName}</strong></h2>
                                            {
                                                products.productGallery.map( (item, index) => {
                                                    return <img className="pb-4 pr-5 img-responsive card-img-top" style={{width:150}} src={item} key={index}></img>;
                                                    
                                                })
                                            }
                                            {/*<img className="pr-4" src={products.productGallery}></img>
                                            <img className="pr-4" src={products.productGallery}></img>
                                            <img src={products.productGallery}></img>*/}
                                            <img className="pl-10 pt-3 pb-3 img-fluid" src={products.productImage}></img>
                                        </div>
                                        <div className="col-md-5">
                                            <h2><strong>Product Details</strong></h2>
                                            <hr></hr>
                                            <h5>Price: ${products.productPrice}</h5>
                                            <hr />
                                            <h5>Qty: 1</h5>
                                            <hr></hr>
                                            <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true">1</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">2</a>
                                                <a className="dropdown-item" href="#">3</a>
                                                <a className="dropdown-item" href="#">4</a>
                                            </div>
                                          
                                            <button type="button pl-6" className="btn btn-success" onClick={()=>actions.addProductToCart (products.productID)}>Add to cart</button>
                                         
                                            <hr></hr>
                                            <dl>
                                                <dt>Description</dt>
                                                <dd>{products.productDescription}</dd>
                                                <dt>Size</dt>
                                                <dd>One size fits all.</dd>
                                                <hr></hr>
                                            </dl>
                                            <button className="btn btn-sm"><Link to={"/storehome"} className="text-dark">See more</Link></button>
                                        </div>
                                    </React.Fragment>
                                );
                            }
                        }
                        </Consumer>
                    </div>
                </div>
            </div> 
            );
        }
    }
      


SingleProduct.propTypes = {
    match: PropTypes.object,
    productGallery: PropTypes.array,
    productID: PropTypes.number
    
    };