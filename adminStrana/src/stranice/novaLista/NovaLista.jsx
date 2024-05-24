import React, { useContext, useEffect, useState } from "react";
import style from "./NovaLista.module.css";
import { getFilmovi } from "../../context/filmContext/serverCallFilm";
import { FilmContext } from "../../context/filmContext/FilmContext";
import { ListContext } from "../../context/listContext/ListaContext";
import { createList } from "../../context/listContext/serverCallLista";
import { useNavigate } from "react-router-dom";

export default function NewList() {
    const [list, setList] = useState({});
    const navigate = useNavigate();

    const { dispatch: dispatchLista } = useContext(ListContext);
    const { filmovi, dispatch } = useContext(FilmContext);

    useEffect(() => {
        getFilmovi(dispatch);
    }, [dispatch]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatchLista);
        navigate("/lista");
    };

    return (
        <div className={style.newProduct}>
            <h1 className={style.addProductTitle}>Nova lista</h1>
            <form className={style.addProductForm}>
                <div className={style.formLeft}>
                    <div className={style.addProductItem}>
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Popularni filmovi"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.addProductItem}>
                        <label>Žanr</label>
                        <input
                            type="text"
                            placeholder="action"
                            name="genre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.addProductItem}>
                        <label>Tip</label>
                        <select name="type" onChange={handleChange} className={style.select}>
                            <option>Tip</option>
                            <option value="film">Film</option>
                            <option value="serija">Serija</option>
                        </select>
                    </div>
                </div>
                <div className={style.formRight}>
                    <div className={style.addProductItem}>
                        <label>Kontent</label>
                        <select
                            multiple
                            name="content"
                            onChange={handleSelect}
                            className={style.select}
                            style={{ height: "280px" }}
                        >
                            {filmovi && filmovi.map((movie) => (
                                <option key={movie._id} value={movie._id}>
                                    {movie.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={style.addProductButton} onClick={handleSubmit}>
                    Kreiraj
                </button>
            </form>
        </div>
    );
}
