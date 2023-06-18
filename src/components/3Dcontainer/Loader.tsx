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
  const [mouseDirection, setMouseDirection] = React.useState(0)

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(gltf.scene)
      const action = mixer.clipAction(gltf.animations[0])
      // action.setLoop(THREE.LoopOnce)
      // action.play() // Play the first animation, modify as needed
      mixerRef.current.mixer = mixer
    }
    console.log('gltf', gltf)
  }, [gltf])
  //mouse scroll
  useEffect(() => {
    window.addEventListener('wheel', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])
  const handleScroll = (event) => {
    // Handle the scroll event here
    const delta = Math.sign(event.deltaY)
    console.log('Scroll delta:', delta)
    setMouseDirection(delta)
    //const { x, y, z } =
    // gltf.nodes.Bone.rotation.z += delta * 0.05

    // Perform any other actions based on the scroll event
  }

  useFrame((_, delta) => {
    const mixer = mixerRef.current.mixer
    if (mixer) {
      mixer.update(delta)
    }
    if (groupRef.current) {
      // groupRef.current.rotation.y += 0.01 // Example: Rotate the model Bone001
    }
    if (gltf.nodes.Bone.rotation.z > -0.6 && gltf.nodes.Bone.rotation.z < 1.6) {
      gltf.nodes.Bone.rotation.z += mouseDirection * 0.01
    }

    const { x, y, z } = gltf.nodes.Bone.rotation
    console.log(z)
  })

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} position={[0, 0, 0]} />
    </group>
  )
}

export default Loader
