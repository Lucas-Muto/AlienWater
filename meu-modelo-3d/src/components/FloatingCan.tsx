"use client"

import { Float } from '@react-three/drei'
import { SodaCan, SodaCanProps } from '@/components/SodaCan'
import { Group } from 'three'
import { forwardRef } from 'react'
import { ReactNode } from 'react'

type FloatingCanProps = {
    flavor?: SodaCanProps['flavor'];
    floatSpeed?: number;
    floatIntensity?: number;
    rotationIntensity?: number;
    floatingRange?: [number, number];
    children?: ReactNode;
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
    flavor = 'grape',
    floatSpeed = 1.5,
    floatIntensity = 1,
    rotationIntensity = 1,
    floatingRange = [-0.1, 0.1],
    children,
    ...props
},ref

) => {
  return (
    <group ref={ref} {...props}>
     <Float 
        speed={floatSpeed} 
        rotationIntensity={rotationIntensity} 
        floatIntensity={floatIntensity} 
        floatingRange={floatingRange} 
        >
        {children}    
        <SodaCan flavor={flavor} />
    </Float>   
    </group>
  )
})

FloatingCan.displayName = 'FloatingCan'

export default FloatingCan