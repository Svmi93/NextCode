import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profil from "./component/pages/profil.js";

function App() {
  return (
    <Router>
      <nav>
        <h1>
          NEXT<span>CODE</span>
        </h1>
        <ul>
          <li>
            <Link to="/" class="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" class="navLink">
              Formations
            </Link>
          </li>
          <li>
            <Link to="/" class="navLink">
              Inscription
            </Link>
          </li>
          <li>
            <Link to="/profil" class="btn">
              Connexion
            </Link>
          </li>
          {/* <li>
            <Link to="/profil">Profil</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
