import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MainHome} from "./views/MainHome.jsx";
import {BlogHome} from "./views/BlogHome.jsx";
import {BlogPost} from "./views/BlogPost.jsx";
import {StoreHome} from "./views/StoreHome.jsx";
import {ConfirmationPage} from "./views/ConfirmationPage.jsx";
import {SingleProduct} from "./views/SingleProduct.jsx";
import {CheckOut} from "./views/CheckOut.jsx";
import {SignUpLogin} from "./views/SignUpLogin.jsx";
import {Profile} from "./views/Profile.jsx";
import {EditProfile} from "./views/EditProfile.jsx";
import {ShoppingCart} from "./views/ShoppingCart.jsx";



export default class Layout extends React.Component {
    
    
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainHome} />
                        <Route exact path="/blog-home" component={BlogHome} />
                        <Route exact path="/blog-post" component={BlogPost} />
                        <Route exact path="/storehome/" component={StoreHome} />
                        <Route exact path="/confirmationpage/" component={ConfirmationPage} />
                        <Route exact path="/singleproduct/" component={SingleProduct} />
                        <Route exact path="/checkout/" component={CheckOut} />
                        <Route exact path="/signup-login" component={SignUpLogin} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/edit-profile" component={EditProfile} />
                        <Route exact path="/shoppingcart/" component={ShoppingCart} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
