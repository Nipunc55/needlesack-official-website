import React from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import { OrbitControls } from '@react-three/drei'
const CanvasComponent: React.FC = () => {
  return (
    <Canvas style={{ width: '775px', height: '750px' }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      <Loader url="/3Dmodels/girl_gym_dance.gltf" />
    </Canvas>
  )
}

export default CanvasComponent
