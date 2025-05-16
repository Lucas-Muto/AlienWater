"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, View, OrbitControls } from "@react-three/drei";
import Scene from "@/components/Scene";
import { useEffect, useState, useRef } from "react";

function ViewCanvas() {
  const [mounted, setMounted] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div 
        ref={viewRef} 
        className="pointer-events-none sticky top-0 z-10 h-screen w-screen overflow-hidden"
      />
      
      <Canvas 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 30,
          margin: 0,
          padding: 0
        }}
        camera={{
          fov: 35,
          position: [0, 0, 10]
        }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <OrbitControls enableZoom={false} enablePan={false} />
        <View track={viewRef as React.RefObject<HTMLElement>}>
          <Scene />
        </View>
      </Canvas>
    </>
  )
}

export default ViewCanvas