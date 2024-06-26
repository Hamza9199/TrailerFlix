import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../../komponente/navbar/Navbar";
import Istaknuto from "../../komponente/istaknuto/Istaknuto";
import List from "../../komponente/lista/Lista";
import Footer from "../../komponente/footer/Footer";
import style from "./Home.module.css";

function Home() {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    const location = useLocation();
    let tip;

    if (location.pathname.includes("/serije")) {
        tip = 'serija';
    } else if (location.pathname.includes("/filmovi")) {
        tip = 'film';
    }
    else{
        tip = 'film'
    }

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("korisnik")).accessToken;
                const res = await axios.get(
                    `http://localhost:8888/server/liste${tip ? "?type=" + tip : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token: `Bearer ${token}`,
                        },
                    }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [tip, genre]);

    return (
        <div className={style.home}>
            <Navbar className={style.navbar} />
            <Istaknuto tip={tip} setGenre={setGenre} />
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
            <Footer />
        </div>
    );
}

export default Home;
