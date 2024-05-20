import "./newUser.css";

export default function NewUser() {
  return (
      <div className="newUser">
        <h1 className="newUserTitle">Novi Korisnik</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label>Ime i Prezime</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Zaporka</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Telefon</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newUserItem">
            <label>Adresa</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="newUserItem">
            <label>Spol</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Muški</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Ženski</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Aktivan</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Da</option>
              <option value="no">Ne</option>
            </select>
          </div>
          <button className="newUserButton">Kreiraj</button>
        </form>
      </div>
  );
}
