import React from 'react';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import ProductCard from '../component/ProductCard.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";



//create your first component
export class StoreHome extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h3>Products</h3>
                    <hr></hr>
                    <Consumer>
                        {({ state, actions }) => 
                            (
                                <div>
                                    {
                                        typeof state.session.token === 'undefined' ?
                                            <div className="alert alert-info center-block" role="alert">
                                                <strong>Hello Wanderer!</strong> Thanks for checking out our shop, Please <Link to={"/signup-login"} className="text-dark font-weight-bold">Sign up or Login</Link> if you would like to view the items in your cart.
                                            </div>
                                        :
                                            <div></div>
                                    }
                                    <div className="row">
                                        {
                                            state.products.map((item,index)=>{
                                                return (
                                                    <div className="col-lg-4 col-md-6 mb-4 pt-4" key={index}>
                                                        <ProductCard
                                                                //key={index}
                                                                productID={item.id}
                                                                productName={item.name}
                                                                productPrice={item.price}
                                                                productImage={item.img_src}
                                                                productDescription= {item.description}
                                                        />
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                )
                            }
                    </Consumer>
                </div>
                <Footer />
            </div>    
        );
    }
}

StoreHome.propTypes = {
    
    productPrice: PropTypes.number
        
    };
    
    
    
    /*<ProductCard
        //key={index}
        productID={item.productID}
        productName={item.productName}
        productPrice={item.productPrice}
        productImage={item.productImage}
        productDescription= {item.productDescription}
    />*/
    