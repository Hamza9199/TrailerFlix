import './App.css';
import Home from "./stranice/home/Home";
import Register from "./stranice/register/Register";
import Login from "./stranice/login/Login";
import Watch from "./stranice/watch/Watch";
import Kontakt from "./stranice/kontakt/Kontakt";
import ONama from "./stranice/oNama/ONama";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


function App () {
    const user = true;
    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                {user && (
                    <>
                        <Route path="/kontakt" element={<Kontakt />} />
                        <Route path="/oNama" element={<ONama />} />
                        <Route path="/filmovi" element={<Home tip="film" />} />
                        <Route path="/serije" element={<Home tip="serija" />} />
                        <Route path="/watch" element={<Watch />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}

export default App;
