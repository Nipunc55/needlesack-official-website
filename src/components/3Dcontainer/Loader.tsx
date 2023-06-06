import React, { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import * as THREE from 'three'
interface LoaderProps {
  url: string
}

const Loader: React.FC<LoaderProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url)
  const groupRef = useRef<THREE.Group>(null)
  const mixerRef = useRef<{ mixer: THREE.AnimationMixer | undefined }>({ mixer: undefined })

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(gltf.scene)
      const action = mixer.clipAction(gltf.animations[0])
      action.play() // Play the first animation, modify as needed
      mixerRef.current.mixer = mixer
    }
  }, [gltf])

  useFrame((_, delta) => {
    const mixer = mixerRef.current.mixer
    if (mixer) {
      mixer.update(delta)
    }
    if (groupRef.current) {
      // groupRef.current.rotation.y += 0.01 // Example: Rotate the model
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} position={[-1, -3, -2]} />
    </group>
  )
}

export default Loader
