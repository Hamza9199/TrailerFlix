import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContextProvider} from "./context/authContext/AuthContext.jsx";
import {FilmContextProvider} from "./context/filmContext/FilmContext.jsx";
import {ListaContextProvider} from "./context/listContext/ListaContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <FilmContextProvider>
            <ListaContextProvider>
            <App />
            </ListaContextProvider>
        </FilmContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
