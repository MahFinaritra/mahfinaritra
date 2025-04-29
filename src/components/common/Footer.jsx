import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
    return <>
        <footer>
            {social.map((item) => (
                <>
                    <i>{item.icon}</i>
                </>
            ))}
            <p>Lien vers mon profil</p>
        </footer>
    </>
}