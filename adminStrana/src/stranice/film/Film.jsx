import { Link } from "react-router-dom";
import style from "./Film.module.css";
import { Publish } from "@mui/icons-material";

export default function Film() {
    const film = JSON.parse(localStorage.getItem("film"));

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
                <form className={style.productForm}>
                    <div className={style.productFormLeft}>
                        <label>Movie Title</label>
                        <input type="text" placeholder={film.title} />
                        <label>Year</label>
                        <input type="text" placeholder={film.year} />
                        <label>Genre</label>
                        <input type="text" placeholder={film.genre} />
                        <label>Limit</label>
                        <input type="text" placeholder={film.limit} />
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
                        <button className={style.productButton}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
