import React, {useRef} from 'react';
import { Heading } from "../common/Heading";
import { contact } from '../data/dummydata';
import emailjs from "@emailjs/browser"

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'mahfina_01abc',
            'template_xz6t689',
            form.current,
            'XpKBxIi-rsFJq_t5l'
        ).then(
            (result) => {
                alert("Message envoyé !");
                console.log(result.text);
                e.target.reset();
            },
            (error) => {
                alert("Une erreur est survenue...");
                console.log(error.text)
            }
        );
    };
    return (
        <>
            <br />
            <div className="contact">
                <div className="container">
                    <Heading title='Rester En Contact'/>
                    <div className="content flexsb">
                        <div className="right">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="flex">
                                    <input type="text" name='name' placeholder='Nom' data-aos="zoom-in-down" required/>
                                    <input type="email" name='email' placeholder='Email' data-aos="zoom-in-up" required/>
                                </div>
                                <input className="inputSubject" type="text" name='title' placeholder='Sujet' data-aos="zoom-in-up" required/>
                                <textarea name='message' placeholder='Votre message' data-aos="zoom-in-down" cols="30" rows="10" required></textarea>
                                <button type='submit'>Soumettre</button>
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