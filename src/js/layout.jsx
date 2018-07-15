import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MainHome} from "./views/MainHome.jsx";
import {ProductHome} from "./views/ProductHome.jsx";
import {ConfirmationPage} from "./views/ConfirmationPage.jsx";


export default class Layout extends React.Component {
    
    
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainHome} />
                        <Route exact path="/producthome/" component={ProductHome} />
                        <Route exact path="/confirmationpage/" component={ConfirmationPage} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
