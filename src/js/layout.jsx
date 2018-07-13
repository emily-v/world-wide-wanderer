import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MainHome} from "./views/MainHome.jsx";

export default class Layout extends React.Component {
    
    
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainHome} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
