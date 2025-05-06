import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo.png"
import { Menu } from "@mui/icons-material";


export const Header = () => {
    const [responsive, setResponsive] = useState(false)
    return (
        <>
            <header>
                <div className="container flexsb">
                    <div className="logo">
                        <img className="logoM" src={logo} alt="Logo" data-aos="zoom-in-right" data-aos-duration="1500"/>
                    </div>
                    <div className={responsive ? "hideMenu" : "nav flex gap-4"}>
                        {navlink.map((links, i) => (
                            <div className="link" data-aos="zoom-in-left" data-aos-duration="1000">
                                <Link to = {links.url} key= {i} >
                                    {links.text}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button className="toggle" onClick={() => setResponsive (!responsive)} data-aos="zoom-in-left" data-aos-duration="1500">
                        <Menu className='icon' ></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}