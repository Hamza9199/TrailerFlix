import React from 'react';
import Footer from '../../komponente/footer/Footer';
import Navbar from '../../komponente/navbar/Navbar.jsx';
import style from './Kontakt.module.css';

function Kontakt() {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.mapAndForm}>
                    <div className={style.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.787032686799!2d17.902471146679243!3d44.20037641233454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee24259b7e2c9%3A0xbbbe13ba46b02200!2sCampus%20of%20University%20of%20Zenica!5e0!3m2!1sen!2sba!4v1717103271957!5m2!1sen!2sba"
                            width="350"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className={style.content}>
                        <div className={style.kontaktContent}>
                            <h1>Kontaktirajte nas</h1>
                            <div className={style.contactInfo}>
                                <h3>Informacije za kontakt</h3>
                                <p>Adresa: Politehnički fakultet, Zenica</p>
                                <p>Email: trailerflix.ba</p>
                                <p>Telefon: +1234567890</p>
                            </div>
                            <form className={style.contactForm}>
                                <h3>Pošaljite nam poruku</h3>
                                <input type="text" placeholder="Ime" />
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="Poruka"></textarea>
                                <button type="submit">Pošalji</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Kontakt;
