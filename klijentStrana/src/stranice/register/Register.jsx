import style from "./Register.module.css";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/g3.png";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();



    return (
        <div className={style.register}>
            <div className={style.top}>
                <div className={style.wrapper}>
                    <img
                        className={style.logo}
                        src={logo}
                        alt="logo"
                    />
                    <button className={style.loginButton} >Prijavi se</button>
                </div>
            </div>
            <div className={style.container}>
                <h1>Beskonacno trejlera bilo kojeg žanra filma ili serije.</h1>
                <h2>Gledaj svaki dan na TrailerFlix.</h2>
                <p>
                    Idemo! Unesi svoju email adresu da se registruješ.
                </p>
                {!email ? (
                    <div className={style.input}>
                        <input type="email" placeholder="email adresa" ref={emailRef} />
                        <button className={style.registerButton}>
                            Krenimo!
                        </button>
                    </div>
                ) : (
                    <form className={style.input}>
                        <input type="username" placeholder="username" ref={usernameRef} />
                        <input type="password" placeholder="sifra" ref={passwordRef} />
                        <button className={style.registerButton}>
                            Počni!
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}