
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from '../Model/Model'
import '../App.css'
import Loading from '../components/Loading'

export default function Home() {
  const ref = useRef()

  return (
    <section className='w-full h-screen relative'>
     
      <Canvas shadows camera={{ fov: 30, position: [10,10,20]}}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
            
          <Model />
            
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} enablePan={true} enableZoom={true } enableRotate= {true} />

      </Canvas>
   </section>
  )
}