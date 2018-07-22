import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';





//create your first component
export class SingleProduct extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container pt-20">
                    <div className="d-flex flex-row">
                        <div className="col-md-7">
                            <h2><strong>Product Name</strong></h2>
                            <img className="pr-4" src="https://via.placeholder.com/150x100"></img>
                            <img className="pr-4" src="https://via.placeholder.com/150x100"></img>
                            <img src="https://via.placeholder.com/150x100"></img>
                            <img className="pl-10 pt-3 pb-3 img-fluid" src="https://via.placeholder.com/500x500"></img>
                        </div>
                        <div className="col-md-5">
                            <h2><strong>Product Details</strong></h2>
                            <hr></hr>
                            <h5>Price: $10.00</h5>
                            <hr></hr>
                            <h5>Qty: 1</h5>
                            <hr></hr>
                            <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">2</a>
                                <a className="dropdown-item" href="#">3</a>
                                <a className="dropdown-item" href="#">4</a>
                            </div>
                            <button type="button pl-6" className="btn btn-success">Add</button>
                            <hr></hr>
                            <dl>
                                <dt>Description</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt>Size</dt>
                                <dd>One size fits all.</dd>
                                <dt>Etc</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.Donec id elit non mi porta gravida at eget metus.</dd>
                                <hr></hr>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

SingleProduct.propTypes = {
    
        
    };