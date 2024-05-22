import { useContext, useState } from "react";
import style from "./noviFilm.module.css";
import Storage from "../../fireBase.js";
import {createFilm} from "../../context/filmContext/serverCallFilm.js";
import {FilmContext} from "../../context/filmContext/FilmContext.jsx";

export default function NewMovie() {
    const [film, setFilm] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch } = useContext(FilmContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setFilm({ ...film, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = Storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload je " + progress + "% zavrsen");
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setFilm((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createFilm(film, dispatch);
    };

    return (
        <div className={style.newProduct}>
            <h1 className={style.addProductTitle}>Novi Film</h1>
            <form className={style.addProductForm}>
                <div className={style.addProductItem}>
                    <label>Slika</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Naslovna slika</label>
                    <input
                        type="file"
                        id="imgTitle"
                        name="imgTitle"
                        onChange={(e) => setImgTitle(e.target.files[0])}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Mala slika</label>
                    <input
                        type="file"
                        id="imgSm"
                        name="imgSm"
                        onChange={(e) => setImgSm(e.target.files[0])}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Naslov</label>
                    <input
                        type="text"
                        placeholder="John Wick"
                        name="title"
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Deskripcija</label>
                    <input
                        type="text"
                        placeholder="deskripcija"
                        name="desc"
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Godina</label>
                    <input
                        type="text"
                        placeholder="Godina"
                        name="year"
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Žanr</label>
                    <input
                        type="text"
                        placeholder="Žanr"
                        name="genre"
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Trajanje</label>
                    <input
                        type="text"
                        placeholder="Trajanje"
                        name="duration"
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Limit</label>
                    <input
                        type="text"
                        placeholder="limit"
                        name="limit"
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Serija?</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className={style.addProductItem}>
                    <label>Trejler</label>
                    <input
                        type="file"
                        name="trailer"
                        onChange={(e) => setTrailer(e.target.files[0])}
                    />
                </div>
                <div className={style.addProductItem}>
                    <label>Video</label>
                    <input
                        type="file"
                        name="video"
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                </div>
                {uploaded === 5 ? (
                    <button className={style.addProductButton} onClick={handleSubmit}>
                        Napravi
                    </button>
                ) : (
                    <button className={style.addProductButton} onClick={handleUpload}>
                        Upload
                    </button>
                )}
            </form>
        </div>
    );
}
