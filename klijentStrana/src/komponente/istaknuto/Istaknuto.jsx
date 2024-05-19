import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Istaknuto.module.css";
import template from "../../assets/template.avif";


export default function Istaknuto({ tip, setGenre }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/filmovi/random?type=${tip}`, {
                    headers: {
                        token:
                            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [tip]);

    console.log(content);
    return (
        <div className={style.featured}>
            {tip && (
                <div className={style.category}>
                    <span>{tip === "movies" ? "Filmovi" : "Serije"}</span>
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
            <img src={template} alt="" />
            <div className={style.info}>
                <img src={content.imgTitle} alt="" />
                <span className={style.desc}>{content.desc}</span>
                <div className={style.buttons}>
                    <button className={style.play}>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className={style.more}>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}