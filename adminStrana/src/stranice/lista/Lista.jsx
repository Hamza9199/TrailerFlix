import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Lista.module.css";
import { updateList } from "../../context/listContext/serverCallLista.js";
import { ListContext } from "../../context/listContext/ListaContext.jsx";

export default function List() {

    const listaN = JSON.parse(localStorage.getItem("lista"));
    let { list, dispatch } = useContext(ListContext);
    list = listaN;

    const [title, setTitle] = useState(list ? list.title : "");
    const [type, setType] = useState(list ? list.type : "");
    const [genre, setGenre] = useState(list ? list.genre : "");

    useEffect(() => {
        if (list) {
            setTitle(list.title);
            setType(list.type);
            setGenre(list.genre);
        }
    }, [list]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedList = {
            _id: list._id,
            title : title || list.title,
            type : type || list.type,
            genre : genre || list.genre,
        };

        try {
            await updateList(updatedList, dispatch);
            console.log("Lista je uspešno ažurirana!");
        } catch (err) {
            console.error("Lista nije ažurirana:", err);
        }
    };

    return (
        <div className={style.product}>
            <div className={style.productTitleContainer}>
                <h1 className={style.productTitle}>Lista</h1>
                <Link to="/novaLista">
                    <button className={style.productAddButton}>Kreiraj</button>
                </Link>
            </div>
            <div className={style.productTop}>
                <div className={style.productTopRight}>
                    <div className={style.productInfoTop}>
                        <span className={style.productName}>{list.title}</span>
                    </div>
                    <div className={style.productInfoBottom}>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>id:</span>
                            <span className={style.productInfoValue}>{list._id}</span>
                        </div>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>žanr:</span>
                            <span className={style.productInfoValue}>{list.genre}</span>
                        </div>
                        <div className={style.productInfoItem}>
                            <span className={style.productInfoKey}>tip:</span>
                            <span className={style.productInfoValue}>{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.productBottom}>
                <form className={style.productForm} onSubmit={handleUpdate}>
                    <div className={style.productFormLeft}>
                        <label>Ime liste</label>
                        <input type="text" placeholder={list.title} value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Tip</label>
                        <input type="text" placeholder={list.type} value={type} onChange={(e) => setType(e.target.value)} />
                        <label>Žanr</label>
                        <input type="text" placeholder={list.genre} value={genre} onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <div className={style.productFormRight}>
                        <button type="submit" className={style.productButton}>Update(still beta)</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
