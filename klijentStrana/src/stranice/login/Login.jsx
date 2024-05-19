import { useContext, useState } from "react";

import logo from '../../assets/g3.png';
import style from "./Login.module.css";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={logo}
                        alt="Logo"
                    />
                </div>
            </div>
            <div className="container">
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
                    <button className="loginButton" onClick={handleLogin}>
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