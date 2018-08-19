import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';
import Footer from '../component/Footer.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export class About extends React.Component{
    
    render(){
    
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-12 col-sm-6 col-lg-5 col-xl-4 text-center px-md-5 mb-5 mb-sm-0 d-flex flex-column">
                                    <img className="img-fluid rounded-circle d-block mx-auto" src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/KeShaunda-bio-pic-e1534687592272.jpg" />
                                    <h5 className="mt-3">KeShaunda Parrish</h5>
                                    <p className="">I began my journey into development out of a want and need to pivot careers.  For many years I&apos;ve been walking the line between being a creative business woman all the while working a 9-5. I wanted a career that would fulfill my need to create and decided to jump head on into UX/UI and Front End Development. In the last 3 months I&apos;ve been frustrated, nervous, and excited all at the same time.  This has truly been a journey but we have made it to the final project. The melding of two ideas brought to life.</p>
                                    <ul className="font-weight-bold list-inline d-flex justify-content-around mt-auto px-5">
                                        <li className="list-inline-item h2"><a href="https://www.instagram.com/?hl=en" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://www.facebook.com" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://twitter.com" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://www.linkedin.com" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://github.com" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                                    </ul>
                                </div>
                                <div className="col col-sm-6 col-lg-5 col-xl-4 text-center px-md-5 d-flex flex-column">
                                    <img className="img-fluid rounded-circle d-block mx-auto" src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/Emily-bio-pic-e1534688048665.jpg" />
                                    <h5 className="mt-3">Emily Vong</h5>
                                    <p className="">After starting my professional career counseling patients and clients to improve their health through nutrition and exercise I realized I wanted to help people in a different way. In 2017 I made the nerve-racking decision to start learning to code and take my career in a new direction. As a new web developer I am excited by the opportunity to use innovative tools and my own creativity to build and contribute to solutions meant to improve the quality of life of its users in some way.</p>
                                    <ul className="font-weight-bold list-inline d-flex justify-content-around mt-auto px-5">
                                        <li className="list-inline-item h2"><a href="https://www.facebook.com/emily.vong25" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://twitter.com/VongEmily" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://www.linkedin.com/in/emily-vong" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                        <li className="list-inline-item h2"><a href="https://github.com/emily-v" className="text-dark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}