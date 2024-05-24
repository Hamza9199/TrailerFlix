import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from '../../assets/g3.png';
import template from '../../assets/template.avif';
import axios from "axios";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";
import {logout} from "../../context/authContext/AuthAction.js";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [newAdmin, setNewAdmin] = useState([]);
    const {dispatch} = useContext(AuthContext);


    useEffect(() => {
        const getAdmin = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("korisnik")).accessToken;
                console.log('Token:', token);
                const res = await axios.get(`http://localhost:8888/server/korisnici`, {
                    headers: {
                        token: "Bearer " + token,
                    },
                });
                console.log('Response data:', res.data);
                setNewAdmin(res.data[0]);
            } catch (err) {
                console.error(err);
            }
        };
        getAdmin();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset !== 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={isScrolled ? `${style.navbar} ${style.scrolled}` : style.navbar}>
            <div className={style.container}>
                <div className={style.left}>
                    <img src={logo} alt="Logo" />
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
                    {newAdmin.isAdmin && <Link to="http://localhost:9999/" className={style.link}>
                        <span>Admin</span>
                    </Link>}
                </div>
                <div className={style.right}>
                    <Search className={style.icon} />
                    <span>Pretrazivanje</span>
                    <Notifications className={style.icon} />
                    <img src={template} alt="template" />
                    <div className={style.profile}>
                        <ArrowDropDown className={style.icon} />
                        <div className={style.options}>
                            <span>Postavke</span>
                        </div>
                    </div>
                    <span className={style.odjavaText} onClick={() => dispatch(logout())}>Odjava</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
