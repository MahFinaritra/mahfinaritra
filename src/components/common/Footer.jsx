import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
    return <>
        <footer>
            <p data-aos="zoom-in">Lien vers mon profil</p>
            {social.map((item, index) => (
                <>
                    <a 
                        key={index}
                        href={item.url}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i>{item.icon}</i>
                    </a>
                </>
            ))}
        </footer>
    </>
}