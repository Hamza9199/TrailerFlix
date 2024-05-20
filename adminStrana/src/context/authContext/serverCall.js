import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction.js";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8888/server/autentifikacija/login", userCredentials);
    console.log("Login response:", res.data);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error("Login error:", err.response ? err.response.data : err.message);
    dispatch(loginFailure());
  }
};
