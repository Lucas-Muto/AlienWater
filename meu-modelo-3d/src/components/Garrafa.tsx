'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Mesh } from 'three'
import React from 'react'

export default function Garrafa() {
  // Carrega o modelo da latinha roxa
  const gltf = useGLTF('/models/LATINHA ROXA.gltf')
  const ref = useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return <primitive object={gltf.scene} ref={ref} scale={1.5} />
}
