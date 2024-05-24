import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { KorisnikContext } from "../../context/korisnikContext/KorisnikContext.jsx";
import "./user.css";
import { updateKorisnici } from "../../context/korisnikContext/serverCallKorisnik.js";

export default function User() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);



  const korisnikU = JSON.parse(localStorage.getItem("korisnikU"));
  let { korisnik, dispatch } = useContext(KorisnikContext);
  korisnik = korisnikU;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      ...korisnik,
      username: username || korisnik.username,
      email: email || korisnik.email,
      password: password || korisnik.password,
      isAdmin: isAdmin || korisnik.isAdmin,
    };

    try {
      await updateKorisnici(korisnik._id, updatedUser, dispatch);
      console.log("Korisnik je uspješno ažuriran");
    } catch (error) {
      console.error("Korisnik nije ažuriran:", error);
    }
  };

  return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Uređivanje Korisnika</h1>
        </div>
        <div className="userContainer">
          <div className="userShow"></div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Uredi</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                      type="text"
                      placeholder={korisnik.username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                      type="text"
                      placeholder={korisnik.email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Password</label>
                  <input
                      type="password"
                      placeholder="Enter new password"
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Admin</label>
                  <select
                      className="userUpdateInput"
                      value={isAdmin}
                      onChange={(e) => setIsAdmin(e.target.value)}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
              <div className="userUpdateRight">
                <button type="submit" className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
