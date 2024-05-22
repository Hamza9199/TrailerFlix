import Navbar from "../../komponente/navbar/Navbar";
import Istaknuto from "../../komponente/istaknuto/Istaknuto";
import List from "../../komponente/lista/Lista";
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import Footer from "../../komponente/footer/Footer";

function Home({ tip }) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("korisnik"));
                const token = user ? user.accessToken : "";
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
        <>

        <div className={style.home}>
            <Navbar className={style.navbar} />
            <Istaknuto tip={tip} setGenre={setGenre} />
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
            <Footer />
        </div>

        </>
    );
}

export default Home;
