import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import YourCart from '../component/YourCart.jsx';
import BillingInfo from '../component/BillingInfo.jsx';

import {Consumer} from "../stores/AppContext.jsx";

//create your first component
export class CheckOut extends React.Component{

    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container pt-4 pb-4">
                    <div className="row">
                        <Consumer>
                            {({ state, actions }) => 
                                (
                                    state.products.map((item,index)=>{
                                        return <YourCart
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
                        <BillingInfo />   
                        
                    </div>
                </div>
            </div>    
        );
    }
}

CheckOut.propTypes = {
        
    };