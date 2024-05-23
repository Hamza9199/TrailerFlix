import React, { useContext, useEffect, useState } from "react";
import style from "./NovaLista.module.css";
import { createFilm, getFilmovi } from "../../context/filmContext/serverCallFilm";
import { FilmContext } from "../../context/filmContext/FilmContext";
import { ListContext } from "../../context/listContext/ListaContext";
import { createList } from "../../context/listContext/serverCallLista";
import { useNavigate } from "react-router-dom";

export default function NewList() {
    const [list, setList] = useState({});
    const navigate = useNavigate();

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(FilmContext);

    useEffect(() => {
        getFilmovi(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setList((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelect = (e) => {
        const { name, selectedOptions } = e.target;
        const value = Array.from(selectedOptions, (option) => option.value);
        setList((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        navigate("/lista");
    };

    return (
        <div className={style.newProduct}>
            <h1 className={style.addProductTitle}>Nova Lista</h1>
            <form className={style.addProductForm} onSubmit={handleSubmit}>
                <div className={style.formLeft}>
                    <div className={style.addProductItem}>
                        <label>Naslov</label>
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
                            placeholder="Action"
                            name="genre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.addProductItem}>
                        <label>Type</label>
                        <select name="type" onChange={handleChange}>
                            <option>Type</option>
                            <option value="film">Filmovi</option>
                            <option value="serija">Serije</option>
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
                            style={{ height: "280px" }}
                        >
                            {movies.map((movie) => (
                                <option key={movie._id} value={movie._id}>
                                    {movie.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={style.addProductButton} type="submit">
                    Kreiraj
                </button>
            </form>
        </div>
    );
}
