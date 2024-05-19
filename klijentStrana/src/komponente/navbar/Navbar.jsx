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
            <div className={style.container}>
                <div className={style.left}>
                    <img
                        src={logo}
                        alt="Logo"
                    />
                    <Link to="/" className={style.link}>
                        <span>Home</span>
                    </Link>
                    <Link to="/serije" className={style.link}>
                        <span className={style.navbarmainLinks}>Serije</span>
                    </Link>
                    <Link to="/filmovi" className={style.link}>
                        <span className={style.navbarmainLinks}>Filmovi</span>
                    </Link>
                    <span>Novo i popularno</span>
                    <span>Moja Lista</span>
                </div>
                <div className={style.right}>
                    <Search className={style.icon} />
                    <span>Djecije</span>
                    <Notifications className={style.icon} />
                    <img
                        src={template}
                        alt="template"
                    />
                    <div className={style.profile}>
                        <ArrowDropDown className={style.icon} />
                        <div className={style.options}>
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




