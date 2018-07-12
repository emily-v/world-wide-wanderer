import React from 'react';

import TestComponent from '../component/TestComponent.jsx';

export class TestHome extends React.Component{
    
    render(){
        return (
            <div className="text-center">
                <a href="#" className="btn btn-success">If you see this green button... bootstrap is working</a>
                <h2>Let the fun begin</h2>
                <TestComponent />
            </div>
        );
    }
}
