import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './component/pages/accueil';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/accueil">Accueil</Link>
      </nav>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
