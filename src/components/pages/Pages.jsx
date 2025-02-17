import React from "react";
import { Header } from "../common/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from "../home/Home";
import { About } from "./About";

export const Pages = () => {
    return (
        <>
            <Router>
                <Header></Header>
                <Switch>
                  <Route exact path= "/" component = {Home}></Route>
                  <Route exact path= "/about" component = {About}></Route>
                </Switch>
            </Router>
        </>
    )
}