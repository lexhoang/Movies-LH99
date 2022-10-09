import logo from './logo.svg';
import './App.css';
import './Btn.css';
import './MUI.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './page/HomePage';
import MoivesPage from './page/MoviesPage';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoivesPage />}></Route>
        <Route path="/movies/page/:page" element={<MoivesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
