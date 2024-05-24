import axios from "axios";
import {
    createFilmFailure,
    createFilmStart, createFilmSuccess,
    deleteFilmFailure,
    deleteFilmStart,
    deleteFilmSuccess,
    getFilmsFailure,
    getFilmsStart,
    getFilmsSuccess
} from "./FilmAction.js";



export const getFilmovi = async (dispatch) => {
    getFilmsStart()
    try {
        const res = await axios.get("http://localhost:8888/server/filmovi", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            }
        });
        console.log(res.data);
        dispatch(getFilmsSuccess(res.data));
    }catch(err){
        dispatch(getFilmsFailure());
    }

}

export const deleteFilm = async (id, dispatch) => {
    dispatch(deleteFilmStart());
    try {
        await axios.delete("http://localhost:8888/server/filmovi/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            }
        });
        dispatch(deleteFilmSuccess(id))
    }catch(err){
        dispatch(deleteFilmFailure());
    }
}

export const createFilm = async (film, dispatch) => {
    dispatch(createFilmStart());
    try {
        const res = await axios.post("http://localhost:8888/server/filmovi/dodaj", film,{
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            }
        });
        dispatch(createFilmSuccess(res.data))
    }catch(err){
        dispatch(createFilmFailure());
    }
}