'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import dynamic from 'next/dynamic'

// Importa o modelo de forma dinâmica (SSR off)
const Garrafa = dynamic(() => import('@/components/Garrafa'), { ssr: false })

export default function Home() {
  return (
    <main className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="sunset" />
        <OrbitControls />
        <Garrafa />
      </Canvas>
    </main>
  )
}
