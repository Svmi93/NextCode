import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Formations</Link>
        <Link to="/">Inscription</Link>
        <Link to="/">Connexion</Link>
        <Link to="/">Profil</Link>
      </nav>
        
    </Router>

  );
    
}

export default App;
