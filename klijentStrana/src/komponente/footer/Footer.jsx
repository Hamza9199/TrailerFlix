import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <div className={style.contactSection}>
                    <h3>Kontakt</h3>
                    <p>Adresa: Politehnicki fakultet</p>
                    <p>Email: trailerflix.ba</p>
                    <p>Telefon: +387999888</p>
                </div>
                <div className={style.linkSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/kontakt">Kontakt</a></li>
                        <li><a href="/oNama">O nama</a></li>
                    </ul>
                </div>
            </div>
            <div className={style.copyRight}>
                <p>&copy; 2024 TrailerFlix</p>
            </div>
        </footer>
    );
}

export default Footer;
