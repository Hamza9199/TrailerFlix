import Navbar from "../../komponente/navbar/Navbar";
import Istaknuto from "../../komponente/istaknuto/Istaknuto";
import List from "../../komponente/lista/Lista";
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";


function Home ({ tip }) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `liste${tip ? "?type=" + tip : ""}${
                        genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token:
                                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
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
        <div className="home">
            <Navbar />
            <Istaknuto tip={tip} setGenre={setGenre} />
            {lists.map((list) => (
                <List list={list} />
            ))}
        </div>
    );
};

export default Home;