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
                <div>
                    <div className="container d-flex justify-content-center">
                        <div className="row">
                            <Consumer>
                                {({ state, actions }) => {
                                    
                                        return (
                                            <OrderSummary
                                            orderFinal={state.orderData}
                                            />
                                        );
                                    }
                                }
                            </Consumer>
                        </div>
                    </div>
                </div>
            </div> 
            
        );
    }
}



ConfirmationPage.propTypes = {
    total: PropTypes.number,
    orderKey: PropTypes.object,
    lineItems: PropTypes.array
    };
    
    
    
    
