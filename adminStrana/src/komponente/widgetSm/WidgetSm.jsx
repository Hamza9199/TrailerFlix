import React, { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import axios from "axios";

export default function WidgetSm() {
    const [newUser, setNewUser] = useState(null);

    useEffect(() => {
        const getNewUser = async () => {
            try {
                const res = await axios.get(`/korisnici?new=true`, {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).token,
                    },
                });
                setNewUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUser();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Novi Korisnici</span>
            {newUser && (
                <div className="widgetSmList">
                    <li className="widgetSmListItem" key={newUser.id}>
                        <img
                            src={newUser.profilePicture || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{newUser.username}</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Prikazi
                        </button>
                    </li>
                </div>
            )}
        </div>
    );
}
