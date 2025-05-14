import React from "react";
import { about } from "../data/dummydata";
import Heading from "../common/Heading.jsx"

export const About = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <Heading title="À propos"/>
                    <div className="content grid2">
                        {about.map((item, index) => {
                            return (
                                <div className="blog" key={index}>
                                    <div className="text">
                                        <h3 data-aos="fade-down">{item.entête}</h3>
                                        {item.type.map((subItem, subIndex) => (
                                            <div key={subIndex}>
                                                <label>{subItem.soustitre}</label>
                                                {subItem.commentaire && <p data-aos="zoom-in">{subItem.commentaire}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}