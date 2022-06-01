import './App.css';
import CurrentTeam from './components/CurrentTeam';
import Homepage from './components/Homepage';
import Works from './components/Works';
import Alumni from './components/Alumni'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/team" element = {<CurrentTeam/>}/>
        <Route path="/alumni" element = {<Alumni/>}/>
        <Route path="/works" element = {<Works/>}/>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
