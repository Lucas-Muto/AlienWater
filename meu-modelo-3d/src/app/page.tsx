'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import dynamic from 'next/dynamic'
import TextoAnimado from '@/components/TextoAnimado'

// Importa o modelo 3D de forma dinâmica (sem SSR)
const Garrafa = dynamic(() => import('@/components/Garrafa'), { ssr: false })

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen bg-white">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Environment preset="sunset" />
          <OrbitControls />
          <Garrafa />
        </Canvas>
      </main>

      <main className="bg-white text-black h-[200vh] px-8 py-10">
        <h1 className="text-3xl font-bold text-center">Scroll pra ver a mágica</h1>
        <TextoAnimado />
      </main>
    </>
  )
}
