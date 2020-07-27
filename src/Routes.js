import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/product">
                <Product/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes