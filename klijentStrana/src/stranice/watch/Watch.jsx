import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";
import style from "./Watch.module.css";
import templateVideo from "../../assets/templateVideo.mp4";

const Watch = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const filmData = localStorage.getItem("film");
    const film = filmData ? JSON.parse(filmData) : null;
    film.trailer = templateVideo;
    useEffect(() => {
        if (!film) {
            console.log("Film nije dostupan");
        }
    }, [film]);

    if (!film) {
        return (
            <div className={style.watch}>
                <p>Film nije dostupan</p>
            </div>
        );
    }

    return (
        <div className={style.watch}>
            <div className={style.back} onClick={() => navigate(-1)}>
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className={style.video}
                autoPlay
                controls
                playsInline
                src={film.trailer}
            />
        </div>
    );
};

export default Watch;
