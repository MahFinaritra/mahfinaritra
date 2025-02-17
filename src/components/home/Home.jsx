import React from "react";
import { Hero } from "./Hero";
import { About } from "../pages/About";

export const Home = () => {
    return (
        <>
            <div>
                <Hero></Hero>
                <About></About>
            </div>
        </>
    )
}