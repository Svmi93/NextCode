import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profil from "./component/pages/profil.js";
import Formation from "./component/pages/formation.js";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/profil">Profil</Link>
        <Link to="/">Home</Link>
        <Link to="/formation">Formations</Link>
        <Link to="/">Inscription</Link>
        <Link to="/">Connexion</Link>
        <Link to="/">Profil</Link>

      </nav>
      <Routes>
        <Route path="/profil" element={<Profil />} />
        <Route path="/formation" element={<Formation />} />
      </Routes>
    </Router>
  );
}

export default App;
