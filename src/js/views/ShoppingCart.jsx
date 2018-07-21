import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';






//create your first component
export class ShoppingCart extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className ="row pt-4">
                        <div className ="col-md-12">
                            <div className ="panel panel-info">
                                <div className ="panel-heading">
                                    <div className ="panel-title">
                                        <div className ="row">
                                            <div className ="col-md-10">
                                                <h3>Shopping Cart</h3>
                                            </div>
                                            <div className ="col-xs-6">
                                                <button type="button" className ="btn btn-primary">
                                                  Continue shopping
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className ="panel-body">
                                    <div className ="row">
                                        <div className ="col-md-4"><img className="img-responsive" src="http://placehold.it/150x100"></img>
                                        </div>
                                        <div className ="col-md-4">
                                            <h4 className ="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                        </div>
                                        <div className ="col-md-2">
                                            <div className ="col-sm-6 text-right">
                                                <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                            </div>
                                            <div className ="col-sm-4">
                                                <input type="text" className="form-control input-sm" defaultValue="1" ></input>
                                            </div>
                                            <button type="button" className="btn btn-default btn-lg" aria-label="Right Align">
                                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className ="row">
                                        <div className ="col-md-4"><img className ="img-responsive" src="http://placehold.it/150x100"></img>
                                        </div>
                                        <div className ="col-md-4 text-left">
                                            <h4 className ="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                        </div>
                                        <div className ="col-md-2">
                                            <div className ="col-sm-6 text-right">
                                                <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                            </div>
                                            <div className ="col-sm-4">
                                                <input type="text" className="form-control input-sm" defaultValue="1" ></input>
                                            </div>
                                            <button type="button" className="btn btn-default btn-lg" aria-label="Right Align">
                                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div className="text-center">
                                    <div className="col-xs-9">
                                        <h6 className="text-right">Added items?</h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <button type="button" className="btn btn-default btn-sm">
                                        Update cart
                                        </button>
                                    </div>
                                </div>
                                <div className ="panel-footer">
                                    <div className ="row text-center">
                                        <div className ="col-sm-9">
                                            <h4 className ="text-right">Total <strong>$50.00</strong></h4>
                                        </div>
                                        <div className ="col-sm-3">
                                            <button type="button" className="btn btn-success btn-block">
                                            Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>



                {/* carousel of blog posts */}
                <div className="container">
                    <div className ="row pt-4 pb-4">
                        <div className ="col-md-12">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="w-100" src="https://via.placeholder.com/500x400" alt="First slide"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First blogpost!</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="w-100" src="https://via.placeholder.com/500x400" alt="Second slide"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second blogpost!</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="w-100" src="https://via.placeholder.com/500x400" alt="Third slide"></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third blogpost!</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
        
    };