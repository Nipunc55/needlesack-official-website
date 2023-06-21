/** @format */
import { useEffect, useState, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import './App.css';
import Loader from './components/Loader';
import NavBar from './components/NavBar';
// import { animated, useSpring } from 'react-spring';
import Typed from 'typed.js';


let lapTop = {
	position: [-0.5, -2, 0],
	rotation: [-0, 1.4, 0.6],
	path: './3Dmodels/mac_display.gltf',
	scale: 1.4,
	iframeSrc: 'https://www.youtube.com/embed/7XgqJwMbczY',
};

function App() {
	const [isScrollingUp, setIsScrollingUp] = useState(false);

//   const animatedPosition = useSpring({
//     position: lapTop.position, // Initial position
//     config: { duration: 500 }, // Animation duration in milliseconds
//   });


// typed js
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "Real Tuk Racing"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
	  loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
}, []);


	useEffect(() => {
		const handleScroll = (event) => {
			console.log(event.deltaY < 0);
		
			setIsScrollingUp(event.deltaY > 0);
			
		};

		window.addEventListener('wheel', handleScroll);

		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, 
	[]);





	return (
		<>
			{/* <Canvas alpha='true' className='canvas'>
						<Loader name={lapTop} />
					</Canvas> */}
			<NavBar />

			<div className='w-100 d-flex flex-column flex-lg-row app'>
				<div className='w-100 '>
					<Canvas alpha='true' className='canvas'>
						<Loader name={lapTop} animate={isScrollingUp} />
					</Canvas>{' '}
				</div>

				<div className='w-100 overflow-auto sections'>
					<section>
						<h1>WHO WE ARE ?</h1>

						<p>We are the Owners of 
							<br/><span className="multiple-text" ref={el}></span></p>
					</section>
					<section className='section-2'>
						<div>
						<h1>slide 2</h1>
						 <p>Yes, the query querySelectorAll('div') is correct. 
							It is a method in JavaScript that allows you to select multiple elements on a web page based on a CSS selector. 
							In this case, the selector 'div' is used to select all the  elements in the document.
						 </p>	
						</div>	
					</section>
					<section className='section-3'>
						<div>
						<h1>slide 3</h1>
						 <p>Yes, the query querySelectorAll('div') is correct. 
							It is a method in JavaScript that allows you to select multiple elements on a web page based on a CSS selector. 
							In this case, the selector 'div' is used to select all the  elements in the document.
						 </p>	
						</div>	
					</section>
					<section className='section-4'>
						<div>
						<h1>slide 4</h1>
						 <p>Yes, the query querySelectorAll('div') is correct. 
							It is a method in JavaScript that allows you to select multiple elements on a web page based on a CSS selector. 
							In this case, the selector 'div' is used to select all the  elements in the document.
						 </p>	
						</div>	
					</section>
					<section className='section-5'>
						<div>
						<h1>slide 5</h1>
						 <p>Yes, the query querySelectorAll('div') is correct. 
							It is a method in JavaScript that allows you to select multiple elements on a web page based on a CSS selector. 
							In this case, the selector 'div' is used to select all the  elements in the document.
						 </p>	
						</div>	
					</section>
				</div>
			</div>
		</>
	);
				}
			

export default App;
