/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Unity Fan youtube channel (https://sketchfab.com/unityfan777)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/celera-500l-306092a41d174e719e83bd143a5ad042
Title: Celera 500l
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Model = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/celera_500l.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="fc6e653c05344348b560e03a0d60ebedfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="bodyObj"
                  position={[30.898, 1.162, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[25.258, 25.258, 126.322]}>
                  <mesh
                    name="bodyObj_Material001_0"
                    geometry={nodes.bodyObj_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Sphere001"
                  position={[30.898, 1.162, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[25.258, 25.258, 126.322]}>
                  <mesh
                    name="Sphere001_celera-500l_0"
                    geometry={nodes['Sphere001_celera-500l_0'].geometry}
                    material={materials['celera-500l']}
                  />
                </group>
                <group
                  name="Sphere002"
                  position={[30.898, 1.162, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[25.258, 25.258, 126.322]}>
                  <mesh
                    name="Sphere002_celera-500l_0"
                    geometry={nodes['Sphere002_celera-500l_0'].geometry}
                    material={materials['celera-500l']}
                  />
                </group>
                <group
                  name="Sphere003"
                  position={[30.898, 1.162, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[25.258, 25.258, 126.322]}>
                  <mesh
                    name="Sphere003_celera-500l_0"
                    geometry={nodes['Sphere003_celera-500l_0'].geometry}
                    material={materials['celera-500l']}
                  />
                </group>
                <group
                  name="Sphere004"
                  position={[30.898, 1.162, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[25.258, 25.258, 126.322]}>
                  <mesh
                    name="Sphere004_celera-500l_0"
                    geometry={nodes['Sphere004_celera-500l_0'].geometry}
                    material={materials['celera-500l']}
                  />
                </group>
                <group
                  name="Circle"
                  position={[-117.99, 1.162, 0]}
                  rotation={[-1.555, 0, 0]}
                  scale={128.232}>
                  <mesh
                    name="Circle_prop_0"
                    geometry={nodes.Circle_prop_0.geometry}
                    material={materials.prop}
                  />
                  <group
                    name="Sphere005"
                    position={[1.489, 0, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.253, 0.253, 1.263]}>
                    <mesh
                      name="Sphere005_celera-500l_0"
                      geometry={nodes['Sphere005_celera-500l_0'].geometry}
                      material={materials['celera-500l']}
                    />
                  </group>
                </group>
                <group
                  name="Sphere006"
                  position={[30.898, 1.162, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[25.258, 25.258, 126.322]}>
                  <mesh
                    name="Sphere006_glass_0"
                    geometry={nodes.Sphere006_glass_0.geometry}
                    material={materials.glass}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/celera_500l.glb')
export default Model;