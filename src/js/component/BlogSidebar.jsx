import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BlogSidebar(props){
    return (
        <div>
            <div className="p-3 text-center sidebarContentContainer">
                <img src="http://via.placeholder.com/150x200" alt="about-photo" className="img-fluid rounded-circle mt-5 mb-3"/>
                <p><span className="font-weight-bold">Hello! </span>Raclette synth taiyaki pok pok coloring book selfies williamsburg godard. Aesthetic organic microdosing bespoke. Next level sriracha green juice, pour-over hashtag bushwick messenger bag blue bottle forage cold-pressed.</p>
                <div className="mt-5 mb-3 archives">
                    <h4 className="mb-3">Archives Placeholder</h4>
                    <ul className="list-unstyled text-left">
                        <li>2018</li>
                        <li>2017</li>
                        <li>2016</li>
                    </ul>
                </div>
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
                    <ul className="font-weight-bold list-inline d-flex justify-content-around">
                        <li className="list-inline-item">I</li>
                        <li className="list-inline-item">F</li>
                        <li className="list-inline-item">T</li>
                        <li className="list-inline-item">L</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogSidebar;