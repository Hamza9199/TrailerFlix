import axios from "axios";
import {
    createListFailure,
    createListStart,
    createListSuccess,
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    getListsFailure,
    getListsStart,
    getListsSuccess,
} from "./ListaAction.js";

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("http://localhost:8888/server/liste", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
};


export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post("http://localhost:8888/server/liste", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure());
    }
};


export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("http://localhost:8888/server/liste/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("korisnik")).accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
};