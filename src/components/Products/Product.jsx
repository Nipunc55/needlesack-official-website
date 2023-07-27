import { Canvas } from "@react-three/fiber";
import Loader3D from "../3DLoader";
import { useState } from "react";

 let iphone = {
  position: [0, 0.5, 0],
  rotation: [0, 0, 0],
  path: "./3Dmodels/iphone.gltf",
  scale: 3,
  iframeSrc: "https://www.wikipedia.org/",
};

export default function Product() {
    const [inputValue, setInputValue] = useState('https://www.wikipedia.org/');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div style={{height:'100vh'}}>
      <div className="w-100 text-center pt-1">
        <h5>Enter URL to see the Mockup</h5>
      <input
        className="w-50 form-control form-control-sm mx-auto"
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleChange}
      /></div>
        <Canvas>
            <Loader3D name={iphone} url={inputValue}/>

         </Canvas>
       
    </div>
  )
}
