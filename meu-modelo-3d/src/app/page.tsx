'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import { Mesh } from 'three'

function Garrafa() {
  const gltf = useGLTF('/models/garrafav1.gltf')
  const ref = useRef<Mesh>(null)

  useGLTF.preload('/models/garrafav1.gltf')

  // Rotaciona o modelo
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, 0, 0]}
      scale={0.3}
    />
  )
}

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      {/* Texto posicionado atrás */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center p-6 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">Alien Water</h1>
          <p className="text-xl text-purple-200">Experimente o sabor extraterrestre</p>
        </div>
      </div>

      {/* Canvas 3D por cima do texto */}
      <Canvas
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />

        <Suspense fallback={null}>
          <Garrafa />
        </Suspense>
        
        {/* OrbitControls foi removido para impedir interação */}
      </Canvas>
    </div>
  )
}
