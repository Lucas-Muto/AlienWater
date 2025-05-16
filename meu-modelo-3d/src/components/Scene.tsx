"use client"

import { useRef } from "react"
import { Environment } from "@react-three/drei"
import FloatingCan from "@/components/FloatingCan"
import { Group } from "three"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

export default function Scene() {
  const can1Ref = useRef<Group>(null)
  const can2Ref = useRef<Group>(null)
  const can3Ref = useRef<Group>(null)
  const can4Ref = useRef<Group>(null)
  const can5Ref = useRef<Group>(null)

  const can1GroupRef = useRef<Group>(null)
  const can2GroupRef = useRef<Group>(null)

  const groupRef = useRef<Group>(null)

  const FLOAT_SPEED = 1.5
  
  useGSAP(() => {
    if(
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    ) return;
    
    //Set can starting location
    gsap.set(can1Ref.current.position, {x: -3.4});
    gsap.set(can1Ref.current.rotation, {z: -0.2});
    gsap.set(can1Ref.current.rotation, { y: Math.PI / 6 }); // ~45 graus à direita

    gsap.set(can2Ref.current.position, {x: 3.4});
    gsap.set(can2Ref.current.rotation, {z: 0.2});
    gsap.set(can2Ref.current.rotation, { y: Math.PI / -6 }); // ~45 graus à direita

    gsap.set(can3Ref.current.position, {y:5, z:2});
    gsap.set(can4Ref.current.position, {y:5, z:2});
    gsap.set(can5Ref.current.position, {y:5, z:2});
    });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
      <FloatingCan ref={can1Ref} flavor='grape' floatSpeed={FLOAT_SPEED} scale={2.4} position={[0, 0, 0]}/>
      </group>

      <group ref={can2GroupRef}>
      <FloatingCan ref={can2Ref} flavor='strawberryLemonade' floatSpeed={FLOAT_SPEED} scale={2.4} position={[0, 0, 0]}/>
      </group>

      <FloatingCan ref={can3Ref} flavor='blackCherry' floatSpeed={FLOAT_SPEED} scale={2.4} position={[0, 0, 0]}/>

      <FloatingCan ref={can4Ref} flavor='watermelon' floatSpeed={FLOAT_SPEED} scale={2.4} position={[0, 0, 0]}/>

      <FloatingCan ref={can5Ref} flavor='lemonLime' floatSpeed={FLOAT_SPEED} scale={2.4} position={[0, 0, 0]}/>
      
      <Environment files="/hdr/field.hdr" environmentIntensity={1} />
    </group>
  )
}