import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo.png"
import { Menu } from "@mui/icons-material";


export const Header = () => {
    const [responsive, setResponsive] = useState(false)
    const handleLinkClick = () => {
        setResponsive(false)
    }
    return (
        <>
            <header>
                <div className="container flexsb">
                    <div className="logo">
                        <img className="logoM" src={logo} alt="Logo"/>
                    </div>
                    <div className={responsive ? "hideMenu" : "nav flex gap-4"}>
                        {navlink.map((links, i) => (
                            <div className="link" key= {i}>
                                <Link to = {links.url} onClick={handleLinkClick}>
                                    {links.text}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button className="toggle" onClick={() => setResponsive (!responsive)}>
                        <Menu className='icon' ></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}