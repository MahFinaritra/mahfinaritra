import React from 'react';
import { Heading } from "../common/Heading";
import { contact } from '../data/dummydata';

export const Contact = () => {
    return (
        <>
            <br />
            <div className="contact">
                <div className="container">
                    <Heading title='Rester En Contact'/>
                    <div className="content flexsb">
                        <div className="right">
                            <form>
                                <div className="flex">
                                    <input type="text" placeholder='Nom' data-aos="zoom-in-down"/>
                                    <input type="email" placeholder='Email' data-aos="zoom-in-up"/>
                                </div>
                                <input className="inputSubject" type="text" placeholder='Sujet' data-aos="zoom-in-up"/>
                                <textarea data-aos="zoom-in-down" name="" id="" cols="30" rows="10"></textarea>
                                <button>Soumettre</button>
                            </form>
                        </div>
                        <div className="left">
                            {contact.map((item) => (
                                <div className="box" data-aos="zoom-in-down">
                                    <i>{item.icon}</i>
                                    <p>{item.text1}</p>
                                    <p>{item.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}