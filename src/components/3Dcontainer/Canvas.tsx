import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import { OrbitControls } from '@react-three/drei'
import { PointLightHelper } from 'three'
const CanvasComponent: React.FC = () => {
  const lightRef = React.useRef()
  return (
    <Canvas style={{ height: '400px' }}>
      {/* backgroundColor: 'white' */}
      <ambientLight intensity={0.5} />
      <OrbitControls
        maxPolarAngle={Math.PI / 2} // Limit rotation to 90 degrees (pi/2) on the X-axis
        minPolarAngle={Math.PI / 3} // Optionally, you can set a minimum polar angle
        // ref={orbitRef}
        // target={center}
      />
      <pointLight ref={lightRef} position={[-30, 5, -25]} />

      <Loader url="/3Dmodels/mac.gltf" />
    </Canvas>
  )
}

export default CanvasComponent
