import React from "react";
import { Link } from "react-router-dom";
import style from "./Lista.module.css";
import { Publish } from "@mui/icons-material";

export default function List() {
    const list = JSON.parse(localStorage.getItem("lista"));

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
                <form className={style.productForm}>
                    <div className={style.productFormLeft}>
                        <label>Ime liste</label>
                        <input type="text" placeholder={list.title} />
                        <label>Tip</label>
                        <input type="text" placeholder={list.type} />
                        <label>Žanr</label>
                        <input type="text" placeholder={list.genre} />
                    </div>
                    <div className={style.productFormRight}>
                        <button className={style.productButton}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
