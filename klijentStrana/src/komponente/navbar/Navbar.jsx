import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from '../../assets/g3.png';
import template from '../../assets/template.avif';



function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src={logo}
                        alt="Logo"
                    />
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link>
                    <Link to="/serije" className="link">
                        <span className="navbarmainLinks">Serije</span>
                    </Link>
                    <Link to="/filmovi" className="link">
                        <span className="navbarmainLinks">Filmovi</span>
                    </Link>
                    <span>Novo i popularno</span>
                    <span>Moja Lista</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>Djecije</span>
                    <Notifications className="icon" />
                    <img
                        src={template}
                        alt="template"
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Postavke</span>
                            <span>Odjava</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;




