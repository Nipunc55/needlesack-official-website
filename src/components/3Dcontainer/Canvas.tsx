import React from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import { OrbitControls } from '@react-three/drei'
const CanvasComponent: React.FC = () => {
  return (
    <Canvas style={{ width: '775px', height: '750px' }}>
      <ambientLight intensity={0.5} />
      <OrbitControls
        maxPolarAngle={Math.PI / 2} // Limit rotation to 90 degrees (pi/2) on the X-axis
        minPolarAngle={Math.PI / 3} // Optionally, you can set a minimum polar angle
        // ref={orbitRef}
        // target={center}
      />
      <pointLight position={[10, 10, 10]} />
      <Loader url="/3Dmodels/girl_gym_dance.gltf" />
    </Canvas>
  )
}

export default CanvasComponent
