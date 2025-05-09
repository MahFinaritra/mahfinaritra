import React from "react";
import { testimonials } from "../data/dummydata";
import { FormatQuote } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
            <div className="testimonials hero">
                <div className="container">
                    <Slider {...settings}>
                    {testimonials.map((val) => (
                        <div className="box">
                            <i data-aos="zoom-out-up">
                                <FormatQuote></FormatQuote>
                            </i>
                            <p data-aos="zoom-out-down">{val.text}</p>
                            <div className="img">
                                <img src={val.image} alt="" data-aos="zoom-out-right"/>
                            </div>
                            <h3 data-aos="zoom-out-left">{val.name}</h3>
                            <label htmlFor="" data-aos="zoom-out">{val.post}</label>
                            
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            <div className="end br"></div>
        </>
    )
}