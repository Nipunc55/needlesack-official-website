/** @format */

import React, { useState, useEffect, useRef } from 'react';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {
	Html,
	
	PresentationControls,

} from '@react-three/drei';
import '../App.css';

const Loader3D = (props) => {
	

	const mesh = useRef();

	const gltf = useLoader(GLTFLoader, props.name.path);



	return (
		<>
			<pointLight position={0,0,0} color='#FFF' intensity={1} />

			<directionalLight color='#ffffff' intensity={1} position={[0, 1,0]} />
			
			<PresentationControls global polar={[-0.1, 0.1]} azimuth={[-1.5, 1.5]}>
				<primitive
					ref={mesh}
					rotation={props.name.rotation}
					object={gltf.scene}
					scale={props.name.scale}
					position={props.name.position}
					>
					<Html
						wrapperClass='phone'
						position={[0, 0, 0.09]}
						transform
						distanceFactor={1.2}
						rotation={[0, 0, 0]}>
						<iframe
						    className='iframe-iphone'
							src='https://www.wikipedia.org/'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen></iframe>
					</Html>
				</primitive>
			</PresentationControls>
		</>
	);
};
export default Loader3D;
