import React from 'react';
import style from './ONama.module.css';

import Navbar from '../../komponente/navbar/Navbar';
import Footer from '../../komponente/footer/Footer';
import logo from "../../assets/g3.png";

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

                    Jedinstveni algoritmi TrailerFlix-a stalno pretražuju internet kako bi pronašli najnovije trejlere
                    za vas, pružajući vam neprekidan pristup najnovijim filmskim hitovima iz udobnosti vašeg doma. Bez
                    obzira jeste li fan akcijskih blockbuster-a, napetih trilera, urnebesnih komedija ili epskih
                    avantura, TrailerFlix ima nešto za svakoga.

                    Jedna od ključnih značajki TrailerFlix-a je personalizirano iskustvo. Na temelju vaših preferencija
                    i prethodnih pregleda, TrailerFlix vam preporučuje trejlere koji odgovaraju vašem ukusu, omogućujući
                    vam da otkrijete nove filmove koje biste možda propustili
                </p>
            </div>
            <div className={style.tempFot}>
                <Footer/>
            </div>
        </>
    );
}

export default ONama;
