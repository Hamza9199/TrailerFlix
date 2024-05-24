import React, { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import axios from "axios";

export default function WidgetSm() {
    const [newUser, setNewUser] = useState([]);

    useEffect(() => {
        const getNewUser = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("korisnik")).accessToken;
                console.log('Token:', token);
                const res = await axios.get(`http://localhost:8888/server/korisnici?new=true`, {
                    headers: {
                        token: "Bearer " + token,
                    },
                });
                console.log('Response data:', res.data);
                setNewUser(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        getNewUser();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Korisnici TrailerFlix-a</span>
            <ul className="widgetSmList">
                {newUser.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img
                            src={user.profilePicture || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Prikazi
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
