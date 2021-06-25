import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Error from "./components/error";
import People from "./components/people";
import Details from "./components/people-details";

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route exact path='/people'>
                    <People/>
                </Route>
                <Route path='/people/:id' children={<Details/>}/>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing
