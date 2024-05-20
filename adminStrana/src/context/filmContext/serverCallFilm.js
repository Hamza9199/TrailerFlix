import axios from "axios";
import {getFilmsFailure, getFilmsStart, getFilmsSuccess} from "./FilmAction.js";



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