import logo from "./logo.svg";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
} from "react-router-dom";
import Cats from "./Components/Cats";
import Login from "./Components/Login";
import CatDetail from "./Components/CatDetail";
import Alihan from "./Components/Alihan";
import { useContext } from "react";
import { userContext } from "./context/userProvider";

function App() {
  let { isLogin, setIsLogin } = useContext(userContext);
  console.log(isLogin);

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.getItem("isLogin");
    localStorage.setItem("isLogin", false);
  };
  return (
    <Router>
      <div className="d-flex">
        <Link to="/" className="me-5">
          Home
        </Link>
        {isLogin ? (
          <button onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/Login" className="me-5">
            Login
          </Link>
        )}
        {/* <Link to="/Login" className="me-5">
          Login
        </Link> */}
        <Link to="/cat/:namaKucing" className="me-5">
          Product Kucing
        </Link>
        {/* <h1>Haloooo</h1> */}
      </div>
      <Switch>
        <Route exact path="/">
          {isLogin ? <Cats /> : <Redirect to="/login" />}
          {/* <Cats /> */}
        </Route>
        <Route path="/login">
          {isLogin ? <Redirect to="/" /> : <Login />}
          {/* <Login /> */}
        </Route>
        <Route path="/cat/:namaKucing">
          <CatDetail />
        </Route>
        <Route path="/:Alihan">
          <Alihan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
