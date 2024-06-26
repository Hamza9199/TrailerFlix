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

    useEffect(() => {
        if (!film) {
            console.log("Film nije dostupan");
        }
    }, [film]);

    const handleHomeClick = () => {
        navigate(-1);
    };

    if (!film) {
        return (
            <div className={style.watch}>
                <p>Film nije dostupan</p>
            </div>
        );
    }

    return (
        <div className={style.watch}>
            <div className={style.back} onClick={handleHomeClick}>
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className={style.video}
                autoPlay
                controls
                playsInline
                src={film.video}
            />
        </div>
    );
};

export default Watch;
