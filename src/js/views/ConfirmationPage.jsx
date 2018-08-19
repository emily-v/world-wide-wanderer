import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import OrderSummary from '../component/OrderSummary.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";



//create your first component
export class ConfirmationPage extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <Consumer>
                    {({ state, actions }) => {
                        
                            return (
                                <div className="container d-flex justify-content-center">
                                    <div className="row">
                                        {/*<div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="card-title text-center">Thank you for your order!</h3>
                                                    <p className="card-text text-center">Your order number is: {actions.order_key}</p>
                                                </div>
                                            </div>
                                        </div>*/}
                                        <OrderSummary/>
                                    </div>
                                </div>
                            );
                        }
                    }
                </Consumer>
                <Footer />
            </div> 
            
        );
    }
}



ConfirmationPage.propTypes = {
    orders: PropTypes.object
        
    };
    
    
    
    
                {/*<Consumer>
                    {({ state, actions }) => {
                    (
                        actions.submitOrder.map((item,index)=>{
                        return (
                            <div className="container"key={index}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="card-title text-center">Thank you for your order!</h3>
                                                <p className="card-text text-center">Your order number is: {this.actions.order_key}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <OrderSummary/>
                                </div>
                            </div>
                        );
                    })
                    );
                }
                    }
                </Consumer>*/}