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
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Footer } from "../common/Footer";

export const Pages = () => {
    return (
        <>
            <Router>
                <Header></Header>
                <Switch>
                  <Route exact path= "/" component = {Home}></Route>
                  <Route exact path= "/about" component = {About}></Route>
                  <Route exact path= "/services" component = {Services}></Route>
                  <Route exact path= "/portfolio" component = {Portfolio}></Route>
                  <Route exact path= "/testimonials" component = {Testimonials}></Route>
                  <Route exact path= "/blog" component = {Blog}></Route>
                  <Route exact path= "/contact" component = {Contact}></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </>
    )
}