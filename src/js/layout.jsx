import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MainHome } from "./views/MainHome.jsx";
import { BlogHome } from "./views/BlogHome.jsx";
import { BlogPost } from "./views/BlogPost.jsx";
import { BlogArchive } from "./views/BlogArchive.jsx";
import { BlogDestinations } from "./views/BlogDestinations.jsx";
import { Gallery } from "./views/Gallery.jsx";
import { About } from "./views/About.jsx";
import { StoreHome } from "./views/StoreHome.jsx";
import { ConfirmationPage } from "./views/ConfirmationPage.jsx";
import { SingleProduct } from "./views/SingleProduct.jsx";
import { CheckOut } from "./views/CheckOut.jsx";
import { SignUpLogin } from "./views/SignUpLogin.jsx";
import { Profile } from "./views/Profile.jsx";
import { EditProfile } from "./views/EditProfile.jsx";
import { ShoppingCart } from "./views/ShoppingCart.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";

import { Provider } from "./stores/AppContext.jsx";

export default class Layout extends React.Component {

    constructor() {
        super();

        this.state = {
            "posts": [
                /*{ 
                    postID: 6,
                    postTitle:"Peru-sing Around Lima, Cusco and Machu Picchu",
                    datePublished: "July 26, 2018",
                    featuredImage: "https://images.unsplash.com/photo-1507791326281-5c006a450da0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49a168d4a1ec80488271faef172b8af3&auto=format&fit=crop&w=1778&q=80",
                    postContent: "Lorem ipsum dolor amet flannel art party swag cardigan narwhal kinfolk vexillologist copper mug post ironic man bun neutra. Narwhal synth af portland ramps. Williamsburg blue bottle taiyaki narwhal seitan wolf, sustainable edison bulb kale chips occupy woke. Flannel seitan slow carb mustache ennui vaporware iceland pop up williamsburg shaman pour over gluten free heirloom. Pour over small batch farm to table, live edge you probably havent heard of them ethical XOXO four dollar toast fanny pack disrupt literally bicycle rights wolf jean shorts taiyaki.",
                    postCategory: "? can just use tags ?",
                    postTags: ["southamerica"],
                    author: "Keshaunda"
                },*/
            ],
            "photo": [
                
            ],
            "products": [
                /*{
                    productID: 1,
                    productName: "Classic Backpack",
                    productPrice: 35,
                    productImage: "https://target.scene7.com/is/image/Target/47910815?wid=1400",
                    productDescription: "The World Wide Wonder Classic™ backpack stays true to its timeless design, offering a clean and simple silhouette that is perfectly tailored to fit your style.",
                    productGallery: ["https://target.scene7.com/is/image/Target/47910815_Alt01?wid=1400","https://target.scene7.com/is/image/Target/47910815_Alt02?wid=1400","https://target.scene7.com/is/image/Target/47910815_Alt03?wid=1400"],
                    productRating: [1,2,3,4,5],
                    productCategory: "Travel Essential"
                },*/
            ],
            "cart": [

            ],

            "session": {

            },

            "isLoading": true
        };

        this.actions = {

            "logIn": (receivedUsername, receivedPassword) => {

                var data = {
                    "username": receivedUsername,
                    "password": receivedPassword
                };
                const that = this;

                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/jwt-auth/v1/token', {
                        method: "POST", // *GET, POST, PUT, DELETE, etc.
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify(data), // body data type must match "Content-Type" header
                    })
                    .then(response => response.json())
                    .then(function(myJson) {
                        console.log("LOGIN", myJson);
                        console.log("TOKEN", myJson.token);
                        that.setState({
                            session: myJson
                        });
                    });


            },

            "createUser": (receivedFirstName, receivedLastName, receivedEmail, receivedPassword) => {
                var newUserData = {
                    "first_name": receivedFirstName,
                    "last_name": receivedLastName,
                    "email": receivedEmail,
                    //"username":receivedEmail,
                    "password": receivedPassword
                };

                var data = {
                    "username": receivedEmail,
                    "password": receivedPassword
                };
                const that = this;

                //PUT NEW USER
                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/sample_api/v1/user', {
                        method: "PUT", // *GET, POST, PUT, DELETE, etc.
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify(newUserData), // body data type must match "Content-Type" header
                    })
                    .then(response => response.json())
                    .then(function(myJson) {
                        console.log("NEW USER", myJson);
                        that.setState({
                            userdata: {
                                "first_name": receivedFirstName,
                                "last_name": receivedLastName,
                                "email": receivedEmail,
                                "username": receivedEmail,
                                "password": receivedPassword
                            }
                        });
                    });

                //POST USER TOKEN
                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/jwt-auth/v1/token', {
                        method: "POST", // *GET, POST, PUT, DELETE, etc.
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify(data), // body data type must match "Content-Type" header
                    })
                    .then(response => response.json())
                    .then(function(myJson) {
                        console.log("LOGIN", myJson);
                        console.log("TOKEN", myJson.token);
                        that.setState({
                            session: {
                                id: 1000,
                                username: receivedEmail,
                                password: receivedPassword,
                                token: myJson.token
                            }

                        });
                    });


            },

            "logout": () => {
                this.setState({
                    session: {

                    }
                });
            },

                        //POST SUBMIT ORDER
            "submitOrder": (customerFirstName, customerLastName, customerAddress, customerAddress2, customerCity, customerState, customerPostcode, customerCountry, customerEmail,customerCreditCardNumber, customerNameOnCard, customerCreditCardExpiration, customerCreditCardCVV) => {
                var orderData = {
                    "first_name": customerFirstName,
                    "last_name": customerLastName,
                    "address": customerAddress,
                    "address_2": customerAddress2,
                    "city": customerCity,
                    "state": customerState,
                    "postcode": customerPostcode,
                    "country": customerCountry,
                    "email": customerEmail,
                    "creditCardNumber": customerCreditCardNumber,
                    "nameOnCard": customerNameOnCard,
                    "creditCardExpiration": customerCreditCardExpiration,
                    "creditCardCVV":customerCreditCardCVV,
                    
                    "line_items": this.state.cart.map ((hippo) => {
                                    return {
                                        product_id : hippo.id,
                                        quantity : 1
                                    };
                                })    
                    };

                const that = this;
                var paymentData ={
                    id:"",
                    title: "",
                    description:"",
                    order:"",
                    enabled:"",
                    method_title:"",
                    method_description:"",
                    
                    settings:[
                        {
                            label:"creditCardNumber",
                            value:customerCreditCardNumber
                        },
                        {
                            label:"nameOnCard",
                            value: customerNameOnCard
                        },
                        {
                            label:"creditCardExpiration",
                            value: customerCreditCardExpiration
                        },
                        {
                            label:"creditCardCVV",
                            value: customerCreditCardCVV
                        }
                        
                        ]
                };
                console.log ("Autho", this.state.session.token);
                
                
                
                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/wc/v2/orders', {
                        method: "POST", // *GET, POST, PUT, DELETE, etc.
                        headers: new Headers({
                            "Content-Type": "application/json; charset=utf-8",
                            "Authorization": 'Bearer '+this.state.session.token
                        }),
                    
                        body: JSON.stringify(orderData) // body data type must match "Content-Type" header
                    })
                    .then(response => response.json())
                    .then( (myJson) => {
                        console.log ("PAYMENT", myJson);
                        
                        this.setState({
                            orderData: myJson,
                            /*cart: [ ]*/
        
                        });

                        /*fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/wc/v2/payment_gateways', {
                                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8"
                                },
                                body: JSON.stringify(paymentData) // body data type must match "Content-Type" header
                            })
                            .then(response => response.json())
                            .then(function(myJson) {
                                that.setState({
                                    orderData: {
                                        "first_name": customerFirstName,
                                        "last_name": customerLastName,
                                        "address": customerAddress,
                                        "address_2": customerAddress2,
                                        "city": customerCity,
                                        "state": customerState,
                                        "postcode": customerPostcode,
                                        "country": customerCountry,
                                        "email": customerEmail,
                                        "creditCardNumber": customerCreditCardNumber,
                                        "nameOnCard": customerNameOnCard,
                                        "creditCardExpiration": customerCreditCardExpiration,
                                        "creditCardCVV":customerCreditCardCVV

                                    }
                                });
                            });*/

                    });



            },
            
            "cart": () => {
                this.setState({
                    session: {

                    }
                });
            },


            addProductToCart: (id) => {
                let tempCart = this.state.cart;

                let arrayWithTheProduct = this.state.products.filter((product) => {
                    return product.id === id;
                });

                tempCart.push(arrayWithTheProduct[0]);
                this.setState({ cart: tempCart });
            },

            deleteProduct: (potato) => {
                let koala = this.state.cart;

                let kayak = koala.filter((kiwi) => {
                    return kiwi.id !== potato;
                });

                //tempProduct.splice(index, 1);
                this.setState({ cart: kayak });
            },


            flyByNight /*calculateTotalCart*/: () => {
                let cow /*fullCart*/ = this.state.cart;

                let boat /*sumOfCart*/ = 0;

                cow.forEach((butter /*products*/ ) => {
                    boat += parseFloat(butter.price);
                    console.log("price", butter);
                });

                return boat;
            },

            "loadInitialData": () => {

                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/wp/v2/posts?_embed')
                    .then(response => response.json())
                    .then(data => this.setState({ posts: data, isLoading: false }))
                    .catch(error => console.log(error));

                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/sample_api/v1/photo')
                    .then(response => response.json())
                    .then(data => this.setState({ photo: data }))
                    .catch(error => console.log(error));

                fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/sample_api/v1/product')
                    .then(response => response.json())
                    .then(data => this.setState({ products: data }))
                    .catch(error => console.log(error));



            }

        };
    }

    componentDidMount() {
        this.actions.loadInitialData();
    }



    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <ScrollToTop>
                        <Switch>
                            <Provider value={{state:this.state, actions:this.actions}}>
                                <Route exact path="/" component={MainHome} />
                                <Route exact path="/blog-home" component={BlogHome} />
                                <Route exact path="/blog-post/:theid" component={BlogPost} />
                                <Route exact path="/blog-archive/:year" component={BlogArchive} />
                                <Route exact path="/blog-destinations/:tag" component={BlogDestinations} />
                                <Route exact path="/gallery" component={Gallery} />
                                <Route exact path="/about" component={About} />
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
                    </ScrollToTop>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
