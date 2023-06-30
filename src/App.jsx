/** @format */
import {useEffect, useState, useRef} from "react";
//import { Canvas } from '@react-three/fiber';
import "./App.css";
// import Loader from './components/Loader';
import NavBar from "./components/NavBar";
import Sections from "./components/Sections";
// import { animated, useSpring } from 'react-spring';
//import Typed from 'typed.js';

function App() {
  return (
    <>
      <NavBar />
      <Sections />
    </>
  );
}

export default App;
