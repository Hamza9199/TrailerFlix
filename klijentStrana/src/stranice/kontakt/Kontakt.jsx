import React from 'react';
import { Marker, Popup } from 'react-map-gl';
import Footer from '../../komponente/footer/Footer';
import Navbar from '../../komponente/navbar/Navbar.jsx';
import style from './Kontakt.module.css';
import ReactMapGL from 'react-map-gl';

const position = [44.2010, 17.9037];
const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGFtemE5OTk5OSIsImEiOiJjbHdoNWwwZWgwYmxuMmtwZnBjcTQ0OG15In0.hgKBbswuzfaGSjdg3nIlxg';

function Kontakt() {
    const [viewport, setViewport] = React.useState({
        latitude: position[0],
        longitude: position[1],
        zoom: 13,
        width: '100%',
        height: 400
    });

    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.mapContainer}>
                    <ReactMapGL
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={(viewport) => setViewport(viewport)}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    >
                        <Marker latitude={position[0]} longitude={position[1]}>
                            <Popup>Zenica</Popup>
                        </Marker>
                    </ReactMapGL>
                </div>
                <div className={style.content}>
                    <div className={style.kontaktContent}>
                        <h1>Kontaktirajte nas</h1>
                        <div className={style.contacnfo}>
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
            <Footer />
        </>
    );
}

export default Kontakt;
