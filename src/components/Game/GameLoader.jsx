/** @format */

import { useState, useEffect, useRef } from 'react';
import './GameLoader.css';
import {

  useLocation,
} from 'react-router-dom'
import Unity, { UnityContext } from 'react-unity-webgl';

function GameLoader() {
	const [isLoaded, setLoaded] = useState(false);
	const loadingBar = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gameName = queryParams.get('gameName');
  const orientation = queryParams.get('orientation')
	
	
	const unityContext = new UnityContext({
		loaderUrl: `../Build/${gameName}/${gameName}.loader.js`,
		dataUrl: `../Build/${gameName}/${gameName}.data.unityweb`,
		frameworkUrl: `../Build/${gameName}/${gameName}.framework.js.unityweb`,
		codeUrl: `../Build/${gameName}/${gameName}.wasm.unityweb`,
	});
     unityContext.on('GameInput',()=>{
	 var inputElement = document.getElementById("user_id");
    if (inputElement) {
        inputElement.focus(); 
    }
	 })
	unityContext.on('progress', (progression) => {
		loadingBar.current.style.width = 100 * progression + '%';
	});
	useEffect(() => {
		const element = document.getElementById('unity-game');
		if (isLoaded) element.classList.remove('hide');
	}, [isLoaded]);
	unityContext.on('loaded', () => {
		setLoaded(true);
	});

	return (
		<>
			<div className='container'>
				{isLoaded === false && (
					<div className='loading-overlay'>
						<h1>
							<span className='let1'>l</span>
							<span className='let2'>o</span>
							<span className='let3'>a</span>
							<span className='let4'>d</span>
							<span className='let5'>i</span>
							<span className='let6'>n</span>
							<span className='let7'>g</span>
						</h1>

						<div id='loading-bar-container'>
							<div ref={loadingBar} id='loading-bar'></div>
						</div>
					</div>
				)}
				<>
					<div id='unity-game' className={`${orientation}`}>
						<Unity className='unity-game' unityContext={unityContext} />
						<input type="text" id="user_id" name="user_id" className='d-none'></input>
					</div>
					
				</>
			</div>
		</>
	);
}

export default GameLoader;
