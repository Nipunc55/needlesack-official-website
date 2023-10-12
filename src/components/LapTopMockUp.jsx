/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import html2canvas from 'html2canvas';
import Loader from './Loader';
import './Sections.css';
import '../App.css';

let lapTop = {
	position: [-0.5, -0.5, 0],
	rotation: [-0, 1.4, 0.6],
	path: './3Dmodels/mac_display.gltf',
	scale: 1.4,
	iframeSrc: 'https://www.youtube.com/embed/7XgqJwMbczY',
};
export default function LapTopMockUp() {
	const [url, setUrl] = useState('https://needlesack.art/');

	useEffect(() => {
		lapTop.iframeSrc = url;
	}, [url]);

	const canvasRef = useRef();
	const handleSnapshotClick = async () => {
		if (canvasRef.current) {
			// Capture the canvas
			html2canvas(canvasRef.current).then((canvas) => {
				// Convert the canvas to a data URL
				const dataURL = canvas.toDataURL('image/png');

				// Create a temporary anchor element for downloading
				const a = document.createElement('a');
				a.href = dataURL;
				a.download = 'snapshot.png'; // Set the filename

				// Trigger a click event on the anchor to initiate the download
				a.click();
			});
		}
	};
	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	return (
		<>
			<div className='input-container'>
				<input
					className='form-control w-50'
					type='text'
					id='urlInput'
					placeholder='https://example.com (enter your site url)'
					value={url}
					onChange={handleUrlChange}
				/>
				<button onClick={handleSnapshotClick}>Take Snapshot</button>
			</div>
			<div className='w-100 model-container' ref={canvasRef}>
				<Canvas
					gl={{ preserveDrawingBuffer: true }}
					// alpha='true'
					className='canvas'>
					<Loader name={lapTop} />
				</Canvas>{' '}
			</div>
		</>
	);
}
