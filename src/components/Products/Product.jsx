import { Canvas } from "@react-three/fiber";
import Loader3D from "../3DLoader";

 let iphone = {
  position: [0, 0.5, 0],
  rotation: [0, 0, 0],
  path: "./3Dmodels/iphone.gltf",
  scale: 3,
  iframeSrc: "https://www.netflix.com/lk/",
};

export default function Product() {
   
  return (
    <div style={{height:'100vh'}}>
        <Canvas>
            <Loader3D name={iphone}/>

            </Canvas>
       
    </div>
  )
}
