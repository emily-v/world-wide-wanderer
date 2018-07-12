import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {TestHome} from "./views/TestHome.jsx";
import {TestView} from "./views/TestView.jsx";

export default class Layout extends React.Component {
    
    
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={TestHome} />
                        <Route exact path="/test" component={TestView} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
