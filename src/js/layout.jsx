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

import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    
    constructor(){
        super();
        
        this.state = {
            "posts":[
                { 
                    postID: 5,
                    postTitle:"An Ornate Week in Barcelona, Spain and Marrakesh, Morocco",
                    datePublished: "May 15, 2018",
                    featuredImage: "https://images.unsplash.com/photo-1468412526475-8cc70299f66f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc327e42db1f0e2e3cefb80132a6a3ce&auto=format&fit=crop&w=1350&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["Europe", "Africa"],
                    author: "Keshaunda"
                },
                { 
                    postID: 4,
                    postTitle:"A Fun and Funky Vegas Wedding Extravaganza",
                    datePublished: "October 5, 2017",
                    featuredImage: "https://images.unsplash.com/photo-1508870557820-ab41597b37e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8fbe75d3c3cbe856770bf9f82b6bd6a0&auto=format&fit=crop&w=1350&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["North America", "United States"],
                    author: "Emily"
                },
                { 
                    postID: 3,
                    postTitle:"Denver, Colorado: At least a mile high",
                    datePublished: "March 20, 2017",
                    featuredImage: "https://images.unsplash.com/photo-1465451295220-eebae3bbe84c?ixlib=rb-0.3.5&s=a64d79a426497edb13207762581df7f2&auto=format&fit=crop&w=1353&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["North America", "United States"],
                    author: "Emily"
                },
                { 
                    postID: 2,
                    postTitle:"My First Ever Trip to NYC",
                    datePublished: "August 18, 2016",
                    featuredImage: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2cf76f5fe8c1347af38e4b515499e62&auto=format&fit=crop&w=1489&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["North America", "United States"],
                    author: "Keshaunda"
                },
                { 
                    postID: 1,
                    postTitle:"Exploring Mexico's Yucatan: Mayan Ruins, Cenotes and Beautiful Beaches",
                    datePublished: "February 17, 2016",
                    featuredImage: "https://images.unsplash.com/photo-1501085928709-6e5c3b86ad9c?ixlib=rb-0.3.5&s=18c949d5fac48fd6acd732f6b9befd7d&auto=format&fit=crop&w=1457&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["North America"],
                    author: "Emily"
                }
            ],
            "products":[
                {
                    productID: 1,
                    productName: "Classic Backpack",
                    productPrice: 35,
                    productImage: "https://images.unsplash.com/photo-1462043103994-3eb31d19a057?ixlib=rb-0.3.5&s=217f61db82f4dbe3314f268ba1648cb5&auto=format&fit=crop&w=750&q=80",
                    productDescription: "The World Wide Wonder Classic™ backpack stays true to its timeless design, offering a clean and simple silhouette that is perfectly tailored to fit your style."
                },
                {
                    productID: 2,
                    productName: "Travel Blanket",
                    productPrice: 20,
                    productImage: "https://images.unsplash.com/photo-1457545195570-67f207084966?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a87ee980e1c3c754f0cb0e929d9c3081&auto=format&fit=crop&w=769&q=80",
                    productDescription: "The perfect blanket for a world wide traveler. Fits easily into your backpack, carryon, or checked luggage. Ideal for napping on a plane or in the car on a long road trip."
                },
                {
                    productID: 3,
                    productName: "The perfect Beach Towel",
                    productPrice: 15,
                    productImage: "https://images.unsplash.com/photo-1471500466955-85aecf33f71f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca4e057c8b627e79025435ab9c215961&auto=format&fit=crop&w=500&q=60",
                    productDescription: "Compliment the look of your bathing suit with this super cute beach towel."
                },
                {
                    productID: 4,
                    productName: "Polariod Camera",
                    productPrice: 85,
                    productImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df4d2256d54f07d2d40ce7cda76c7ebf&auto=format&fit=crop&w=1500&q=80",
                    productDescription: "Everyone now a days has a DSLR that they bring along with them on vacation. Why not make vacationing more nostalogic with a polariod camera. The benefit you get to see the amazing pictures your snapping instantly."
                },
                {
                    productID: 5,
                    productName: "Sunnies",
                    productPrice: 20,
                    productImage: "https://images.unsplash.com/photo-1476052492661-714447484e01?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8274b22609a79419168bddf8c0d971e9&auto=format&fit=crop&w=1500&q=80",
                    productDescription: "While your venturing around town on these bright and sunnies days, don't forget the perfect travel accessory. These amazing sunglasses compliment any outfit."
                },
                {
                    productID: 6,
                    productName: "Headphones",
                    productPrice: 40,
                    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9f0fdc18a215ec725f8ca61dc6fcbdf&auto=format&fit=crop&w=500&q=60",
                    productDescription: "When you are stuck at the airport due to a delay or have a long flight oversea's. These headphones will help pass the time by cancelling out all noise.  "
                }
            ],
            "cart":[
                
            ],
            "session":{
                
            }
        };
    }
    
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={MainHome} />
                            <Route exact path="/blog-home" component={BlogHome} />
                            <Route exact path="/blog-post/:theid" component={BlogPost} />
                            <Route exact path="/storehome/" component={StoreHome} />
                            <Route exact path="/confirmationpage/" component={ConfirmationPage} />
                            <Route exact path="/singleproduct/" component={SingleProduct} />
                            <Route exact path="/checkout/" component={CheckOut} />
                            <Route exact path="/signup-login" component={SignUpLogin} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/edit-profile" component={EditProfile} />
                            <Route exact path="/shoppingcart/" component={ShoppingCart} />
                        </Provider>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
