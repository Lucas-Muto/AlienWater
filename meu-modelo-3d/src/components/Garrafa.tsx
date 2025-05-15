'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export default function Garrafa() {
  const gltf = useGLTF('/models/garrafav1.gltf')
  const ref = useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return <primitive object={gltf.scene} ref={ref} scale={0.3} />
}
