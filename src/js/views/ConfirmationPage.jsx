import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import OrderSummary from '../component/OrderSummary.jsx';

import {Consumer} from "../stores/AppContext.jsx";



//create your first component
export class ConfirmationPage extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Thank you for your order!</h3>
                                    <p className="card-text text-center">Your order number is: XXXX-XXXX</p>
                                </div>
                            </div>
                        </div>
                        <OrderSummary/>
                    </div>
                </div>
            </div>    
        );
    }
}

ConfirmationPage.propTypes = {
        
    };