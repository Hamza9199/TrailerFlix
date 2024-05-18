import './App.css';
import Home from "./stranice/home/Home";
import Register from "./stranice/register/Register";
import Login from "./stranice/login/Login";
import Watch from "./stranice/watch/Watch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App () {
  const user = false;
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          {user && (
              <>
                <Route path="/filmovi">
                  <Home type="film" />
                </Route>
                <Route path="/serije">
                  <Home type="serija" />
                </Route>
                <Route path="/watch">
                  <Watch />
                </Route>
              </>
          )}
        </Switch>
      </Router>
  )
}

export default App;