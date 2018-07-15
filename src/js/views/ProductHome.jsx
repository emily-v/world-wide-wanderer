import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../component/NavBar.jsx';
import ProductCard from '../component/ProductCard.jsx';





//create your first component
export class ProductHome extends React.Component{
    
    render(){
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>    
        );
    }
}

ProductHome.propTypes = {
        
    };