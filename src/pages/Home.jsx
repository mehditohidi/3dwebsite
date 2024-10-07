
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
      <div className="absolute inset-0 flex justify-center items-center z-10 w-full h-screen">    
        <div className="grid justify-center grid-cols-1">
          <div className="mehdi w-fit h-fit p-5 rounded-lg text-orange-950 text-3x-l">
             <a href="https://mehditohidi.com" target="_blank">Hello! I'm Mehdi Tohidi.</a>
          </div>
        </div>
      </div>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [3, 3, 3]}}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
            false
          <Model />
            false
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
   </section>
  )
}