import React, { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations } from '@react-three/drei'
import * as THREE from 'three'
interface LoaderProps {
  url: string
}

const Loader: React.FC<LoaderProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url)
  const groupRef = useRef<THREE.Group>(null)
  const mixerRef = useRef<THREE.AnimationMixer>(null)

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene)
      const action = mixerRef.current.clipAction(gltf.animations[0])
      action.play() // Play the first animation, modify as needed
    }
  }, [gltf])

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta)
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01 // Example: Rotate the model
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} position={[0, -2, 0]} />
    </group>
  )
}

export default Loader
