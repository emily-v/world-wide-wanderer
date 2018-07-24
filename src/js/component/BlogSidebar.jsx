import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function BlogSidebar(props){
    return (
        <div>
            <div className="py-3 px-md-1 px-lg-3 text-center sidebarContentContainer">
                <img src="http://via.placeholder.com/150x200" alt="about-photo" className="img-fluid rounded-circle mt-5 mb-3"/>
                <p><span className="font-weight-bold">Hello! </span>Raclette synth taiyaki pok pok coloring book selfies williamsburg godard. Aesthetic organic microdosing bespoke. Next level sriracha green juice, pour-over hashtag bushwick messenger bag blue bottle forage cold-pressed.</p>
                {/*-----BEGIN ARCHIVES-----*/}
                <div className="mt-5 mb-3 archives">
                    <h4 className="mb-3">Archives</h4>
                    <ul className="list-unstyled text-left">
                        <li><Link to="/blog-filtered-2018" className="text-dark">2018</Link></li>
                        <li><Link to="#" className="text-dark">2017</Link></li>
                        <li><Link to="#" className="text-dark">2016</Link></li>
                    </ul>
                </div>
                
                {/*-----BEGIN DESTINATIONS-----*/}
                <div className="mt-5 mb-3 destinations">
                    <h4 className="mb-3">Destinations Placeholder</h4>
                    <ul className="list-unstyled text-left">
                        <li>North America</li>
                        <li>South America</li>
                        <li>Europe</li>
                        <li>Africa</li>
                        <li>Asia</li>
                    </ul>
                </div>
                <div className="mt-5 mb-3 socials">
                    <h4 className="mb-3">Connect</h4>
                    <ul className="font-weight-bold list-inline d-flex justify-content-around px-5">
                        <li className="list-inline-item h2"><a href="https://www.instagram.com/?hl=en" className="text-dark"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li className="list-inline-item h2"><a href="https://www.facebook.com/" className="text-dark"><FontAwesomeIcon icon={faFacebook}/></a></li>
                        <li className="list-inline-item h2"><a href="https://twitter.com/" className="text-dark"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li className="list-inline-item h2"><a href="https://www.linkedin.com/" className="text-dark"><FontAwesomeIcon icon={faLinkedin}/></a></li>
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