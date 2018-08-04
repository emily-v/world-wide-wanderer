import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



function BillingInfo(props){
    return (
        <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""></input>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""></input>
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""></input>
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
                </div>
    
                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select className="custom-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                            <option>Georgia</option>
                            <option>Florida</option>
                            <option>NewYork</option>
                            <option>Texas</option>
                            <option>Illinois</option>
                            <option>Nevada</option>
                            <option>Arizona</option>
                            <option>Louisiana</option>
                            <option>New Mexico</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required=""></input>
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="same-address"></input>
                    <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="save-info"></input>
                </div>
                <hr className="mb-4"></hr>
                <h4 className="mb-3">Shipping Address</h4>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""></input>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""></input>
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""></input>
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"></input>
                </div>
    
                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select className="custom-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required=""></input>
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                    </div>
                </div>
                
                <hr className="mb-4"></hr>
                <h4 className="mb-3">Payment</h4>
                
                <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required=""></input>
                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""></input>
                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""></input>
                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required=""></input>
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required=""></input>
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""></input>
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""></input>
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <button className="btn btn-success btn-lg btn-block" type="submit">Complete Order</button>
            </form>
        </div>

        
 );
    }
    

BillingInfo.propTypes = {
    
    };
    
export default BillingInfo;