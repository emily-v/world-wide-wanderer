import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import NavBar from '../component/NavBar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';

export class BlogPost extends React.Component{
    
    render(){
        return (
            <div>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <h1 className="text-center">This is the Title of an Individual Blog Post</h1>
                        </div>
                        <div className="col">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}