import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MainHome} from "./views/MainHome.jsx";
import {BlogHome} from "./views/BlogHome.jsx";
import {BlogPost} from "./views/BlogPost.jsx";
import {BlogArchive} from "./views/BlogArchive.jsx";
import {BlogDestinations} from "./views/BlogDestinations.jsx";
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
                    postID: 6,
                    postTitle:"Peru-sing Around Lima, Cusco and Machu Picchu",
                    datePublished: "July 26, 2018",
                    featuredImage: "https://images.unsplash.com/photo-1507791326281-5c006a450da0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49a168d4a1ec80488271faef172b8af3&auto=format&fit=crop&w=1778&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["southamerica"],
                    author: "Keshaunda"
                },
                { 
                    postID: 5,
                    postTitle:"An Ornate Week in Barcelona, Spain and Marrakesh, Morocco",
                    datePublished: "May 15, 2018",
                    featuredImage: "https://images.unsplash.com/photo-1468412526475-8cc70299f66f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc327e42db1f0e2e3cefb80132a6a3ce&auto=format&fit=crop&w=1350&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["europe", "africa"],
                    author: "Keshaunda"
                },
                { 
                    postID: 4,
                    postTitle:"A Fun and Funky Vegas Wedding Extravaganza",
                    datePublished: "October 5, 2017",
                    featuredImage: "https://images.unsplash.com/photo-1508870557820-ab41597b37e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8fbe75d3c3cbe856770bf9f82b6bd6a0&auto=format&fit=crop&w=1350&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["northamerica", "unitedstates"],
                    author: "Emily"
                },
                { 
                    postID: 3,
                    postTitle:"Denver, Colorado: At least a mile high",
                    datePublished: "March 20, 2017",
                    featuredImage: "https://images.unsplash.com/photo-1465451295220-eebae3bbe84c?ixlib=rb-0.3.5&s=a64d79a426497edb13207762581df7f2&auto=format&fit=crop&w=1353&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["northamerica", "unitedstates"],
                    author: "Emily"
                },
                { 
                    postID: 2,
                    postTitle:"My First Ever Trip to NYC",
                    datePublished: "August 18, 2016",
                    featuredImage: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2cf76f5fe8c1347af38e4b515499e62&auto=format&fit=crop&w=1489&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["northamerica", "unitedstates"],
                    author: "Keshaunda"
                },
                { 
                    postID: 1,
                    postTitle:"Exploring Mexico's Yucatan: Mayan Ruins, Cenotes and Beautiful Beaches",
                    datePublished: "February 17, 2016",
                    featuredImage: "https://images.unsplash.com/photo-1501085928709-6e5c3b86ad9c?ixlib=rb-0.3.5&s=18c949d5fac48fd6acd732f6b9befd7d&auto=format&fit=crop&w=1457&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["northamerica"],
                    author: "Emily"
                }
            ],
            "products":[
                {
                    productID: 1,
                    productName: "Classic Backpack",
                    productPrice: 35,
                    productImage: "https://target.scene7.com/is/image/Target/47910815?wid=1400",
                    productDescription: "The World Wide Wonder Classic™ backpack stays true to its timeless design, offering a clean and simple silhouette that is perfectly tailored to fit your style.",
                    productGallery: ["https://target.scene7.com/is/image/Target/47910815_Alt01?wid=1400","https://target.scene7.com/is/image/Target/47910815_Alt02?wid=1400","https://target.scene7.com/is/image/Target/47910815_Alt03?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Travel Essential"
                },
                {
                    productID: 2,
                    productName: "Neck Pillow",
                    productPrice: 20,
                    productImage: "https://target.scene7.com/is/image/Target/50020496?wid=1400",
                    productDescription: "The perfect neck pillow for a world wide traveler. Snaps easily onto your backpack, carryon, or checked luggage. Ideal for napping on a plane or in the car on a long road trip.",
                    productGallery: ["https://target.scene7.com/is/image/Target/50020496_Alt01?wid=1400","https://target.scene7.com/is/image/Target/50020496_Alt05?wid=1400","https://target.scene7.com/is/image/Target/50020496_Alt06?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Travel Essential"
                },
                {
                    productID: 3,
                    productName: "The perfect Beach Towel",
                    productPrice: 15,
                    productImage: "https://target.scene7.com/is/image/Target/50451009_Alt02?wid=1400",
                    productDescription: "Compliment the look of your bathing suit with this super cute beach towel.",
                    productGallery: ["https://target.scene7.com/is/image/Target/50451009?wid=1400","https://target.scene7.com/is/image/Target/50451009_Alt01?wid=1400","https://target.scene7.com/is/image/Target/50451009_Alt03?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Beach Necessity"
                },
                {
                    productID: 4,
                    productName: "Polariod Camera",
                    productPrice: 85,
                    productImage: "https://target.scene7.com/is/image/Target/52890727?wid=1400",
                    productDescription: "Everyone now a days has a DSLR that they bring along with them on vacation. Why not make vacationing more nostalogic with a polariod camera. The benefit you get to see the amazing pictures your snapping instantly.",
                    productGallery: ["https://target.scene7.com/is/image/Target/52890727_Alt01?wid=1400","https://target.scene7.com/is/image/Target/52890727_Alt02?wid=1400","https://target.scene7.com/is/image/Target/52890727_Alt03?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Camera"
                },
                {
                    productID: 5,
                    productName: "Sunnies",
                    productPrice: 20,
                    productImage: "https://target.scene7.com/is/image/Target/16699768?wid=1400",
                    productDescription: "While your venturing around town on these bright and sunnies days, don't forget the perfect travel accessory. These amazing sunglasses compliment any outfit.",
                    productGallery: ["https://target.scene7.com/is/image/Target/16699768_Alt01?wid=1400","https://target.scene7.com/is/image/Target/16699768_Alt02?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Beach Necessity"
                },
                {
                    productID: 6,
                    productName: "Headphones",
                    productPrice: 40,
                    productImage: "https://target.scene7.com/is/image/Target/53246709?wid=1400",
                    productDescription: "When you are stuck at the airport due to a delay or have a long flight oversea's. These headphones will help pass the time by cancelling out all noise.  ",
                    productGallery: ["https://target.scene7.com/is/image/Target/53246709_Alt01?wid=1400","https://target.scene7.com/is/image/Target/53246709_Alt02?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Travel Essential"
                }
            ],
            "cart":[
                
            ],
            "session":{
                
            }
        };
    
        this.actions = {
            
            "loadSession": (receivedUsername, receivedPassword) => {
                this.setState(
                    {
                        session: {
                            id:1000,
                            username:receivedUsername,
                            password:receivedPassword,
                            token:"assdflhlkjcugjsd1234"
                        }
                    });
                    
                var data = {
                    "username":receivedUsername, 
                    "password":receivedPassword
                  };
            },
            
            "logout":() => {
                this.setState(
                    {
                        session: {
                            
                        }
                    });
            },
            
            addProductToCart: (productID) => {
                let tempCart = this.state.cart;
                
                let arrayWithTheProduct = this.state.products.filter( (products) => {
                    return products.productID === productID;  
                });
                
                tempCart.push(arrayWithTheProduct[0]);
                this.setState({cart: tempCart});
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
                            <Route exact path="/blog-archive/:year" component={BlogArchive} />
                            <Route exact path="/blog-destinations/:tag" component={BlogDestinations} />
                            <Route exact path="/storehome/" component={StoreHome} />
                            <Route exact path="/confirmationpage/" component={ConfirmationPage} />
                            <Route exact path="/singleproduct/:theid" component={SingleProduct} />
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
