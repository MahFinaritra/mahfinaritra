import React from "react";
import { about } from "../data/dummydata";
import Heading from "../common/Heading.jsx"

export const About = () => {
    return (
        <>
            <section className="about">
                <div className="container flex">
                    {about.map((val, i) => (
                        <>
                            <div className="left">
                                <img src={val.cover} alt="" data-aos="fade-down-right"/>
                            </div>
                            <div className="right" data-aos="fade-down-left">
                                <div className="text-center">
                                    <Heading title = "About Me"/>
                                </div>
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <div className="deuxBouton">
                                    <button>Download CV</button>
                                    <button className="primaryBtn">Download CV</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}