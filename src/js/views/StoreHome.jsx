import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import ProductCard from '../component/ProductCard.jsx';

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
                    <div className="row">
                        <Consumer>
                            {({ state, actions }) => 
                                (
                                    state.products.map((item,index)=>{
                                        return <ProductCard
                                        key={index}
                                        productID={item.productID}
                                        productName={item.productName}
                                        productPrice={item.productPrice}
                                        productImage={item.productImage}
                                        productDescription= {item.productDescription}
                                        />;
                                    })
                                )
                            }
                        </Consumer>
                    </div>
                </div>
            </div>    
        );
    }
}

StoreHome.propTypes = {
        
    };