import React, { useContext, useState } from 'react';
import style from './Login.module.css';
import { AuthContext } from "../../context/authContext/AuthContext.jsx";
import { loginCall } from "../../context/authContext/serverCall.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Attempting login with:", { email, password });
        await loginCall({ email, password }, dispatch);
    };

    return (
        <div className={style.login}>
            <form className={style.loginForm}>
                <label>Email</label>
                <input
                    className={style.loginInput}
                    type="text"
                    placeholder="Unesite email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Lozinka</label>
                <input
                    className={style.loginInput}
                    type="password"
                    placeholder="Unesite lozinku..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className={style.loginButton}
                    onClick={handleLogin}
                    disabled={isFetching}
                >
                    Uloguj se
                </button>
            </form>
        </div>
    );
}
