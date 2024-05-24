import axios from "axios";
import {
    createKorisnikFailure,
    createKorisnikStart,
    deleteKorisnikFailure,
    deleteKorisnikStart, deleteKorisnikSuccess,
    getKorisnikFailure,
    getKorisnikStart, getKorisnikSuccess, updateKorisnikFailure, updateKorisnikStart, updateKorisnikSuccess

} from "./KorisnikAction.js";



export const getKorisnici = async (dispatch) => {
    getKorisnikStart()
    try {
        const res = await axios.get("http://localhost:8888/server/korisnici/", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            }
        });
        dispatch(getKorisnikSuccess(res.data))

    } catch (err) {
        dispatch(getKorisnikFailure());
    }

}

export const deleteKorisnici = async (id, dispatch) => {
    dispatch(deleteKorisnikStart());
    try {
        await axios.delete("http://localhost:8888/server/korisnici/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            }
        });
        dispatch(deleteKorisnikSuccess(id));
    } catch (err) {
        dispatch(deleteKorisnikFailure());
    }
}

export const updateKorisnici = async (id, newData, dispatch) => {
    dispatch(updateKorisnikStart());
    try {
        const token = JSON.parse(localStorage.getItem("korisnik")).accessToken;
        const res = await axios.put(`http://localhost:8888/server/korisnici/${id}`, newData, {
            headers: {
                token: "Bearer " + token,
            }
        });
        dispatch(updateKorisnikSuccess(res.data));
    } catch (err) {
        dispatch(updateKorisnikFailure());
    }
}

