/** @format */

//import { Canvas } from '@react-three/fiber';
import './App.css';
import LapTopMockUp from './components/LapTopMockUp';
// import Loader from './components/Loader';
import NavBar from './components/NavBar';
import Section from './components/Section';
// import { animated, useSpring } from 'react-spring';
//import Typed from 'typed.js';

function App() {
	return (
		<>
			<NavBar />
			{/* <Section /> */}
			<LapTopMockUp />
		</>
	);
}

export default App;
