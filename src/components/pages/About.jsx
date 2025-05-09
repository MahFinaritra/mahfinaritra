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
                                    <Heading title = "À propos de moi"/>
                                </div>
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <p>{val.desc2}</p>
                                <p>{val.desc3}</p>
                                <p>{val.desc4}</p>
                                <div className="deuxBouton">
                                    <a href="/contact">
                                        <button>Contactez-moi</button>
                                    </a>
                                    <a href="/cv.pdf" download>
                                        <button className="primaryBtn">Télécharger CV</button>
                                    </a>                               
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
            <div className="end br"></div>
        </>
    )
}