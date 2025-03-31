import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profil from "./component/pages/profil.js";
import Formation from "./component/pages/formation.js";

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
            <Link to="/formation" class="navLink">
              Formations
            </Link>
          </li>
          <li>
            <Link to="/" class="navLink">
              Inscriptions
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
        <Route path="/formation" element={<Formation />} />
      </Routes>
    </Router>
  );
}

export default App;
