import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";


function OrderSummary(props){
    return (
        <Consumer>
            {({ state, actions }) =>
                    {
                        return(
        
                            <div className="card pt-4">
                                <div className="card-body">
                                    <h2 className="card-title">Order Summary</h2>
                                    <hr></hr>
                                    { state.cart.map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <h6 className="my-0">{item.name}</h6>
                                                    <a href="https://placeholder.com"><img style={{width:210}} src={item.img_src}></img></a>
                                                    <h6 className="text-muted">${item.price}</h6>
                                                    <hr></hr>
                                                </React.Fragment>);
                                            })
                                        }
                                    <p className="card-text"><strong> Qty: {state.cart.length}</strong></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Subtotal:</strong> ${(actions.flyByNight())}</li>
                                    <li className="list-group-item"><strong>Shipping:</strong> Free </li>
                                    <li className="list-group-item"><strong>Sales Tax:</strong> $0.00 </li>
                                </ul>
                                <div className="card-body">
                                    <h3 className="card-title">Order Total: ${(actions.flyByNight())}</h3>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-success"><Link to={"/storehome"} className="text-light">Continue Shopping</Link></button>
                                </div>
                            </div>
                       );
                    }
                }
        </Consumer>
                                
     );
}
    

OrderSummary.propTypes = {
    productImage: PropTypes.string
    };
    
export default OrderSummary;