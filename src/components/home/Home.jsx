import React from "react";
import { Hero } from "./Hero";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Counter } from "../pages/Counter";
import { Portfolio } from "../pages/Portfolio";
import { Testimonials } from "../pages/Testimonials";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Compétences } from "../pages/Compétence";
import { Formation } from "../pages/Formation";

export const Home = () => {
    return (
        <>
            <div>
                <Hero></Hero>
                <About></About>
                <Services></Services>
                {/* <Counter></Counter> 
                <Portfolio></Portfolio> 
                <Testimonials></Testimonials>
                <Blog></Blog>*/}
                <Formation></Formation>
                <Compétences></Compétences>
                <Contact></Contact>
            </div>
        </>
    )
}