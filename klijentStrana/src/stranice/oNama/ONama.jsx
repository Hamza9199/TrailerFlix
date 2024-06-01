import React from 'react';
import style from './ONama.module.css';

import Navbar from '../../komponente/navbar/Navbar';
import Footer from '../../komponente/footer/Footer';
import logo from "../../assets/g3.png";
import teamMember1 from "../../assets/channels4_profile.jpg";
import teamMember2 from "../../assets/channels4_profile.jpg";
import teamMember3 from "../../assets/channels4_profile.jpg";

function ONama() {
    return (
        <>
            <Navbar/>
            <div className={style.oNamaContainer1}>
                <h2>O nama</h2>
            </div>
            <div className={style.oNamaContainer}>
                <img
                    className={style.logo}
                    src={logo}
                    alt="Logo"
                />
                <p>
                    "TrailerFlix" je revolucionarna web aplikacija koja nudi beskonačno iskustvo uživanja u najnovijim
                    filmskim trejlerima. S intuitivnim sučeljem i bogatim sadržajem, TrailerFlix je savršen izbor za sve
                    ljubitelje filma koji žele biti u toku s najnovijim filmskim dostignućima.
                </p>
                <p>
                    Jedinstveni algoritmi TrailerFlix-a stalno pretražuju internet kako bi pronašli najnovije trejlere
                    za vas, pružajući vam neprekidan pristup najnovijim filmskim hitovima iz udobnosti vašeg doma. Bez
                    obzira jeste li fan akcijskih blockbuster-a, napetih trilera, urnebesnih komedija ili epskih
                    avantura, TrailerFlix ima nešto za svakoga.
                </p>
                <p>
                    Jedna od ključnih značajki TrailerFlix-a je personalizirano iskustvo. Na temelju vaših preferencija
                    i prethodnih pregleda, TrailerFlix vam preporučuje trejlere koji odgovaraju vašem ukusu, omogućujući
                    vam da otkrijete nove filmove koje biste možda propustili.
                </p>
            </div>
            <div className={style.teamSection}>
                <h2>Naš tim</h2>
                <div className={style.teamMember}>
                    <img src={teamMember1} alt="Member 1" />
                    <h3>Hamza Gačić</h3>
                    <p>Fullstack dev</p>
                </div>
                <div className={style.teamMember}>
                    <img src={teamMember2} alt="Member 2" />
                    <h3>Aldina Ismić</h3>
                    <p>Frontend dev</p>
                </div>
                <div className={style.teamMember}>
                    <img src={teamMember3} alt="Member 3" />
                    <h3>Džan Babahmetović</h3>
                    <p>Frontend dev</p>
                </div>
            </div>
            <div className={style.tempFot}>
                <Footer/>
            </div>
        </>
    );
}

export default ONama;
