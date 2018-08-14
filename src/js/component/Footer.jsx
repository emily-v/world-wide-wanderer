import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props){
    
    
    
    return (

        <footer className="text-center py-3">
            <Link to={"/"}><img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-e1534169380538.png" alt="logo" width="60" className="rounded-circle mx-2 mb-2 mb-sm-0"/></Link>
            <p className="text-white d-sm-inline mx-1 mx-md-2">Built in 2018 by Emily V and KeShaunda P</p>
        </footer>
    );
}

export default Footer;