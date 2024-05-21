import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./ListItem.module.css";

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("http://localhost:8888/server/filmovi/nadji/" + item, {
                    headers: {
                        token:
                            "Bearer "+JSON.parse(localStorage.getItem("korisnik")).accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    return (
        <Link to={{ pathname: "/watch", state: { movie: movie } }}>
            <div
                className={style.listItem}
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={movie.imgSmall} alt="" />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className={style.itemInfo}>
                            <div className={style.icons}>
                                <PlayArrow className={style.icon} />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className={style.icon} />
                                <ThumbDownOutlined className={style.icon} />
                            </div>
                            <div className={style.itemInfoTop}>
                                <span>{movie.duration}</span>
                                <span className={style.limit}>+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className={style.desc}>{movie.desc}</div>
                            <div className={style.genre}>{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}
