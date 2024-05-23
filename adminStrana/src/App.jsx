import React, { useContext, useEffect } from 'react';
import './App.css';
import NewUser from './stranice/newUser/NewUser';
import User from './stranice/user/User';
import UserList from './stranice/userList/UserList';
import Home from './stranice/home/Home';
import Sidebar from './komponente/sidebar/Sidebar';
import Topbar from './komponente/topbar/Topbar';
import Film from './stranice/film/Film.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './stranice/login/Login';
import { AuthContext } from './context/authContext/AuthContext.jsx';
import FilmLista from './stranice/filmLIsta/FilmLista.jsx';
import NoviFilm from './stranice/noviFilm/NoviFilm.jsx';
import Listeliste from './stranice/listeListe/Listeliste.jsx';
import Lista from './stranice/lista/Lista.jsx';
import NovaLista from './stranice/novaLista/NovaLista.jsx';

function App() {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log("korisnik:", user);
    }, [user]);

    return (
        <Router>
            {user && <Topbar />}
            <div className="container">
                {user && <Sidebar />}
                <Routes>
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/filmovi" element={<FilmLista />} />
                    <Route path="/film/:filmId" element={<Film />} />
                    <Route path="/noviFilm" element={<NoviFilm />} />
                    <Route path="/liste" element={<Listeliste />} />
                    <Route path="/lista/:listaId" element={<Lista />} />
                    <Route path="/novaLista" element={<NovaLista />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
