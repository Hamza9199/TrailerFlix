import { Link } from "react-router-dom";
import style from "./Film.module.css";
import { Publish } from "@mui/icons-material";
import { useContext, useState } from "react";
import { FilmContext } from "../../context/filmContext/FilmContext.jsx";
import { updateFilm } from "../../context/filmContext/serverCallFilm.js";

export default function Film() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [limit, setLimit] = useState("");

    const filmN = JSON.parse(localStorage.getItem("film"));
    let { film, dispatch } = useContext(FilmContext);

    film = filmN;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedFilm = {
            _id: film._id,
            title: title || film.title,
            year: year || film.year,
            genre: genre || film.genre,
            limit: limit || film.limit,
        };

        try {
            const res = await updateFilm(film._id, updatedFilm, dispatch);
            console.log("Film updated successfully:", res);
        } catch (err) {
            console.error("Failed to update film:", err);
        }
    };

    return (
        <div className={style.product}>
            <div className={style.productTitleContainer}>
                <h1 className={style.productTitle}>Film</h1>
                <Link to="/noviFilm">
                    <button className={style.productAddButton}>Kreiraj</button>
                </Link>
            </div>
            <div className={style.productTop}>
                <div className={style.productTopRight}>
                    <div className={style.productInfoTop}>
                        <img src={film.img} alt="" className={style.productInfoImg} />
                        <span className={style.productName}>{film.title}</span>
                    </div>
                    <div className={style.productInfoBottom}>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>id:</span>
                            <span className={style.productInfoValue}>{film._id}</span>
                        </div>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>genre:</span>
                            <span className={style.productInfoValue}>{film.genre}</span>
                        </div>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>year:</span>
                            <span className={style.productInfoValue}>{film.year}</span>
                        </div>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>limit:</span>
                            <span className={style.productInfoValue}>{film.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.productBottom}>
                <form className={style.productForm} onSubmit={handleUpdate}>
                    <div className={style.productFormLeft}>
                        <label>Movie Title</label>
                        <input type="text" placeholder={film.title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Year</label>
                        <input type="text" placeholder={film.year} onChange={(e) => setYear(e.target.value)} />
                        <label>Genre</label>
                        <input type="text" placeholder={film.genre} onChange={(e) => setGenre(e.target.value)} />
                        <label>Limit</label>
                        <input type="text" placeholder={film.limit} onChange={(e) => setLimit(e.target.value)} />
                        <label>Trailer</label>
                        <input type="file" />
                        <label>Video</label>
                        <input type="file" />
                    </div>
                    <div className={style.productFormRight}>
                        <div className={style.productUpload}>
                            <img
                                src={film.img}
                                alt=""
                                className={style.productUploadImg}
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button type="submit" className={style.productButton}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
