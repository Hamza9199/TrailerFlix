import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Istaknuto.module.css";
import {Link, useLocation} from "react-router-dom";

export default function Istaknuto({ tip, setGenre }) {
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    const location = useLocation();

    if (location.pathname.includes("/serije")) {
        tip = 'film';
    } else if (location.pathname.includes("/filmovi")) {
        tip = 'film';
    }
    else{
        tip = 'film'
    }

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`http://localhost:8888/server/filmovi/random?type=${tip}`, {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
                    },
                });

                setContent(res.data[0]);
            } catch (err) {
                setError(err.message);
            }
        };
        getRandomContent();
    }, [tip]);

    const handlePlayClick = () => {
        localStorage.setItem("film", JSON.stringify(content));
    };

    if (error) {
        return <div className={style.error}>Error: {error}</div>;
    }

    return (
        <div className={style.featured}>
            {tip && (
                <div className={style.category}>
                    <span>{tip === "film" ? "Filmovi" : "Serije"}</span>
                    <select
                        name="genre"
                        id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option>Genre</option>
                        <option value="avantura">Avantura</option>
                        <option value="komedija">Komedija</option>
                        <option value="krimi">Krimi</option>
                        <option value="fantazija">Fantazija</option>
                        <option value="historijski">Historijski</option>
                        <option value="horor">Horor</option>
                        <option value="romansa">Romansa</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="triler">Triler</option>
                        <option value="western">Western</option>
                        <option value="anime">Anime</option>
                        <option value="drama">Drama</option>
                        <option value="dokumentarac">Dokumentarac</option>
                    </select>
                </div>
            )}
            {content && (
                <>
                    <img src={content.img} alt={content.title} />
                    <div className={style.info}>
                        <img src={content.imgTitle} alt={content.title} />
                        <span className={style.desc}>{content.desc}</span>
                        <div className={style.buttons}>
                            <Link to="/watch" onClick={handlePlayClick}>
                                <button className={style.play}>
                                    <PlayArrow />
                                    <span>Play</span>
                                </button>
                            </Link>
                            <button className={style.more}>
                                <InfoOutlined />
                                <span>Info</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
