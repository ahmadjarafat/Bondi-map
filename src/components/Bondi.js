import React, { Suspense,useRef,useEffect } from "react";
import { useGLTF, useAnimations, PerspectiveCamera} from "@react-three/drei";
import {OrthographicCamera} from "@react-three/drei";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { AnimationMixer } from "three";
import {useThree} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"


export default function Model(props) {
  const { nodes, materials, animations, scene } = useGLTF("assets/Bondi.glb");
  const { clips } = useAnimations(animations)
  const state = useThree();
  
state.camera.lookAt(0,0,0);
state.camera.zoom = 0.5;
clips[3].duration = 10;
clips[4].duration = 10;
let mixer = new AnimationMixer(scene);
let actionCircle = mixer.clipAction(clips[3]);
actionCircle.play();

let cube = nodes.Cube004.clone();
console.log(cube);
scene.add(cube);

for (let i = 1; i <= 3; i++){
 let circleClip = clips[3].clone();
 circleClip.tracks[1].name = `Circle00${i}.quaternion`
 circleClip.tracks[2].name = `Circle00${i}.scale`
 let circleAction = mixer.clipAction(circleClip);
 circleAction.play();
}

let textAction = mixer.clipAction(clips[4])

textAction.play();

for (let i = 1; i <= 3; i++){
  let textClip = clips[4].clone();
  textClip.tracks[1].name = `Text00${i}.quaternion`
  textClip.tracks[2].name = `Text00${i}.scale`
  let textAction = mixer.clipAction(textClip);
  textAction.play();
 }

  useFrame((state, delta) => {

    mixer?.update(delta);
    
})


  
  
  return (
    <>
    <group dispose={null}>
    <primitive position={[-700,-600,0]} object={scene} />
    <PerspectiveCamera position={[0,0,0]} rotation={[0,0,0]} makeDefault  />
    <OrbitControls />
    </group>
    </>
  );
}

