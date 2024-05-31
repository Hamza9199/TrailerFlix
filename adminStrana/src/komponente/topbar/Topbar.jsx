import React, {useContext} from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import {logout} from "../../context/authContext/AuthAction.js";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";
import logo from "../../../../klijentStrana/src/assets/g3.png"
import {Link} from "react-router-dom";

export default function Topbar() {

  const {dispatch} = useContext(AuthContext);

  return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img className={"logo"} src={logo}/>
          </div>
          <div className="topRight">

            <div className="topbarIconContainer">
              <Link to={"/login"} className={"link"}>
              <span className="logoutTitle" onClick={() => dispatch(logout())} >Logout</span>
              </Link>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
                src="https://tr.rbxcdn.com/ef9bb7b81b5c5046686c4bbcf9a1e189/420/420/Hat/Webp"
                alt=""
                className="topAvatar"
            />
          </div>
        </div>
      </div>
  );
}
