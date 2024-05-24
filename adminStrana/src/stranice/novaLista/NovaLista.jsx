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

    const { dispatch } = useContext(ListContext);
    const { dispatch: dispatchMovie } = useContext(FilmContext);
    let movies = [{}];

    useEffect(() => {
        const fetchData = async () => {
            try {
                getFilmovi(dispatchMovie);
                movies = dispatchMovie
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
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
                            placeholder="Film.."
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.addProductItem}>
                        <label>Žanr</label>
                        <input
                            type="text"
                            placeholder="akcija, triler, horor.."
                            name="genre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.addProductItem}>
                        <label>Tip</label>
                        <select name="type" onChange={handleChange}>
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
                            style={{ height: "280px", color: "black"}}
                        >
                            {movies.map((film) => (
                                <option key={film._id} value={film._id}>
                                    {film.title === undefined ? "Nema filmova" : film.title}

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
