import { useContext, useState } from "react";

import logo from '../../assets/g3.png';
import style from "./Login.module.css";
import {loginCall} from "../../context/authContext/serverCall.js";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({email, password}, dispatch);
    }


    return (
        <div className={style.login}>
            <div className={style.top}>
                <div className={style.wrapper}>
                    <img
                        className={style.logo}
                        src={logo}
                        alt="Logo"
                    />
                </div>
            </div>
            <div className={style.container}>
                <form>
                    <h1>Prijava</h1>
                    <input
                        type="email"
                        placeholder="Email ili broj telefona"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Sifra"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={style.loginButton} onClick={handleLogin}>
                        Prijavi se
                    </button>
                    <span>
            Novi na TrilerFlixu? <b>Registruj se!</b>
          </span>
                    <small>
                        Stranica je zašticena od strane Google reCAPTCHA. <b>Vidi vise</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}