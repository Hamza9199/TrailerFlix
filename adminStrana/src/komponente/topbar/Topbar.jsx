import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">TrailerFlix Admin Panel</span>
          </div>
          <div className="topRight">

            <div className="topbarIconContainer">
              <span className="logoutTitle" >Logout</span>
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
