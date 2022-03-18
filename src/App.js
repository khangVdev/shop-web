import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import ProductList from "./Components/ProductList/ProductList";
import { Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import CartDialog from "./Components/CartDialog/CartDialog";
import Details from "./Components/Details/Details";
import Order from "./Components/Order/Order";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Footer from "./Components/Footer/Footer";
// import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Trove Collective</title>
          <link rel="canonical" href="https://www.trovecollective.co/" />
          <meta property="og:url" content="https://www.trovecollective.co/" />
          <meta property="og:type" content="website" />
          <meta
            content="Trove is the home to your thoughts, passions, hobbies. Come to share, discover, and learn."
            name="description"
          />
          <meta
            content="Trove - the future of blogging"
            property="twitter:title"
          />
          <meta content="Trove - the future of blogging" property="og:title" />
          <meta
            content="https://uploads-ssl.webflow.com/615deea09f73ef5291d8fde8/6171bf04da07417002764021_Open%20Graph%20(1).png"
            property="og:image"
          />
        </Helmet> */}
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <CartDialog />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/details/:id" component={Details} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/order" component={Order} />
              <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
