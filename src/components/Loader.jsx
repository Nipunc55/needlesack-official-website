/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {
	Html,
	OrbitControls,
	PresentationControls,
	useTexture,
} from '@react-three/drei';
import '../App.css';
import { animated, useSpring } from 'react-spring';
const Loader = (props) => {
	const [pointLightPos, setPointLightPos] = useState([4, 0, 4]);
	const [center, setCenter] = useState([0, 0, 0]);
	const [clickedObject, setClickedObject] = useState(null);
	const mesh = useRef();
	const orbitRef = useRef();
	const { camera } = useThree();
	const gltf = useLoader(GLTFLoader, props.name.path);
	const raycaster = new THREE.Raycaster();
//animated position
   // Define the target position
  const targetPosition = [-0.5, -2, 3];

  // Create an animated position using react-spring
  const springProps = useSpring({
    position: targetPosition,
    config: { duration: 1000 }, // Animation duration in milliseconds
  });


	function getWorldPosition(child) {
		const worldPosition = new THREE.Vector3().copy(child.position);
		child.parent.localToWorld(worldPosition);
		return worldPosition;
	}
	useEffect(() => {
		console.log(gltf.scene);
	}, [gltf]);
	useEffect(() => {
		if (clickedObject) {
			const regex = /^frame(\d+)?$/;
			texture_material.map.rotation = 0;

			if (regex.test(clickedObject.name))
				clickedObject.material = texture_material;
		}

		//console.log(clickedObject);
	}, [clickedObject]);

	function PlayAnimation() {
		console.log(gltf.scene.children);

		if (gltf.scene) {
			mesh.current = new THREE.AnimationMixer(gltf.scene);
			const action = mesh.current.clipAction(gltf.animations[0]);
			action.play();
			// action.halt(8)
			gltf.animations.forEach((clip) => {
				const action = mesh.current.clipAction(clip);
				console.log(clip);
				action.play();

				// action.halt(props.aniamtionDuration)
			});
		}
	}
	/**
	 * get the center of clicked object
	 * @param {*} event
	 */
	

	//*********/
	useFrame((state, delta) => {
		// orbitRef.current.update();
		if (mesh.current) {
			// mesh.current.update(delta);
			if(props.animate){
				const currentPosition = mesh.current.position;
                const newPosition = currentPosition.clone();

               // Increment position values by 0.1 on each frame update
               

				if( newPosition.z  <= 2) newPosition.z += 0.1;
				
				mesh.current.position.set(newPosition.x, newPosition.y, newPosition.z);
				//  mesh.current.position.set(props.name.position[0], props.name.position[1], props.name.position[2]);
//  mesh.current.position.copy(springProps.position);
			}else{
				const currentPosition = mesh.current.position;
                const newPosition = currentPosition.clone();

               // Increment position values by 0.1 on each frame update
               

				if( newPosition.z  >= 0) newPosition.z -= 0.1;
				
				mesh.current.position.set(newPosition.x, newPosition.y, newPosition.z);
			
			}
			
		}
	});

	return (
		<>
			<pointLight position={pointLightPos} color='#FFF' intensity={1} />

			<directionalLight color='#ffffff' intensity={0.5} position={[0, 1, 0]} />
			{/* <OrbitControls
				maxPolarAngle={Math.PI / 2} // Limit rotation to 90 degrees (pi/2) on the X-axis
				minPolarAngle={Math.PI / 3} // Optionally, you can set a minimum polar angle
				ref={orbitRef}
				target={center}
			/> */}
			<PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.2, 0.4]}>
				<primitive
					ref={mesh}
					rotation={props.name.rotation}
					object={gltf.scene}
					scale={props.name.scale}
					position={props.name.position}
					>
					<Html
						wrapperClass='laptop'
						position={[1.4, 1, -0.01]}
						transform
						distanceFactor={1}
						rotation={[-1.71, -1.25, -1.709]}>
						<iframe
						    className='iframe-website'
							src='https://needlesack.art/'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen></iframe>
					</Html>
				</primitive>
			</PresentationControls>
		</>
	);
};
export default Loader;
