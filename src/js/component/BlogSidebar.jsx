import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function BlogSidebar(props){
    
    
    
    return (
        
        
        
        <div>
            <div className="pt-5 pb-3 px-md-1 px-lg-3 text-center sidebarContentContainer">
                <img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/Emily-pic-e1534537576902.jpg" alt="Emily-pic" className="img-fluid rounded-circle mt-2 mb-3 mr-md-1" width="100"/>
                <img src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/Keshaunda-pic-e1534539578333.jpg" alt="KeShaunda-pic" className="img-fluid rounded-circle mt-2 mb-3 ml-md-1" width="100"/>
                <p><span className="font-weight-bold">Hello world! </span>We are Emily Vong and KeShaunda Parrish, new full-stack web developers in Miami, Florida. This project blends together components that lay the groundwork for each of our personal-professional interests while gaining skills and confidence for future career endeavors. We hope you enjoy the site!</p>
                {/*-----BEGIN ARCHIVES-----*/}
                <div className="mt-5 mb-3 archives">
                    <h4 className="mb-3">Archives</h4>
                    <ul className="list-unstyled text-left">
                        <li><Link to={"/blog-archive/"+2018} className="text-dark">2018</Link></li>
                        <li><Link to={"/blog-archive/"+2017} className="text-dark">2017</Link></li>
                        <li><Link to={"/blog-archive/"+2016} className="text-dark">2016</Link></li>
                    </ul>
                </div>
                
                {/*-----BEGIN DESTINATIONS-----*/}
                <div className="mt-5 mb-3 destinations">
                    <h4 className="mb-3">Destinations</h4>
                    <ul className="list-unstyled text-left">
                        <li><Link to={"/blog-destinations/"+"northamerica"} className="text-dark">North America</Link></li>
                        <li><Link to={"/blog-destinations/"+"unitedstates"} className="text-dark">United States</Link></li>
                        <li><Link to={"/blog-destinations/"+"southamerica"} className="text-dark">South America</Link></li>
                        <li><Link to={"/blog-destinations/"+"europe"} className="text-dark">Europe</Link></li>
                        <li><Link to={"/blog-destinations/"+"africa"} className="text-dark">Africa</Link></li>
                        <li><Link to={"/blog-destinations/"+"asia"} className="text-dark">Asia</Link></li>
                    </ul>
                </div>
                <div className="mt-5 mb-3 socials">
                    <h4 className="mb-3">Connect</h4>
                    <ul className="font-weight-bold list-inline d-flex justify-content-around px-5">
                        <li className="list-inline-item h2"><a href="https://www.instagram.com/?hl=en" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li className="list-inline-item h2"><a href="https://www.facebook.com/" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                        <li className="list-inline-item h2"><a href="https://twitter.com/" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li className="list-inline-item h2"><a href="https://www.linkedin.com/" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogSidebar;

/*<div className="accordion" id="archivesAccordion">
    <div className="card">
        <div className="card-header bg-white" id="headingOne">
            <h5 className="mb-0">
                <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#collapseOne">2018</button>
            </h5>
        </div>
        <div className="collapse" id="collapseOne" data-parent="#archivesAccordion">
            <div className="card-body">
                List corresponding posts by year
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header bg-white" id="headingTwo">
            <h5 className="mb-0">
                <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#collapseTwo">2017</button>
            </h5>
        </div>
        <div className="collapse" id="collapseTwo" data-parent="#archivesAccordion">
            <div className="card-body">
                List corresponding posts by year
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header bg-white" id="headingThree">
            <h5 className="mb-0">
                <button className="btn" type="button btn-block" data-toggle="collapse" data-target="#collapseThree">2016</button>
            </h5>
        </div>
        <div className="collapse" id="collapseThree" data-parent="#archivesAccordion">
            <div className="card-body">
                List corresponding posts by year
            </div>
        </div>
    </div>
</div>*/