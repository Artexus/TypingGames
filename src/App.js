import logo from './logo.svg';
import './App.css';
import GamePage from './pages/Main/indexPage';
import HomePage from './pages/Home/homePage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='' element={<HomePage/>}/>
        <Route exact path='/play' element={<GamePage/>}/>
      </Routes>

    </Router>

  );
}

export default App;
