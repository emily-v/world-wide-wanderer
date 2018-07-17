import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../component/NavBar.jsx';






//create your first component
export class SingleProduct extends React.Component{
    
    render(){
        return (
            <div>
                <NavBar />
                <div className="container-fluid pt-10">
                    <div className="d-flex flex-row">
                        <div className="col-md-7">
                            <h2><strong>Product Name</strong></h2>
                            <img className="pr-4" src="https://via.placeholder.com/150x100"></img>
                            <img className="pr-4" src="https://via.placeholder.com/150x100"></img>
                            <img src="https://via.placeholder.com/150x100"></img>
                            <img className="pl-10 pt-3 pb-3" src="https://via.placeholder.com/500x500"></img>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                            
                                <hr></hr>
                                <h2>Product Details</h2>
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
            </div>    
        );
    }
}

SingleProduct.propTypes = {
        
    };