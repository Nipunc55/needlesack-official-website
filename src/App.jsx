/** @format */

//import { Canvas } from '@react-three/fiber';
import "./App.css";
// import Loader from './components/Loader';
import NavBar from "./components/NavBar";
import Sections from "./components/Sections";
// import { animated, useSpring } from 'react-spring';
//import Typed from 'typed.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'


import Games from "./components/Games";
import GameLoader from "./components/Game/GameLoader";


function App() {
  return (
    <>
     <Router>
      <NavBar />
        <Routes>
        
         <Route path="/" exact element={<Sections />} />
         <Route path="/games" exact element={<Games />} />
         <Route path="/game-loader" exact element={<GameLoader />} />
       </Routes>
      </Router>
     
    </>
  );
}

export default App;
