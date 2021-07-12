import React from "react";
import { useGLTF, useAnimations} from "@react-three/drei";
import {OrthographicCamera, PerspectiveCamera} from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { AnimationClip, AnimationMixer, Euler, Vector3, VectorKeyframeTrack, Quaternion } from "three";
import {useThree} from "@react-three/fiber"
import {OrbitControls, TrackballControls, FlyControls } from "@react-three/drei"


export default function Model(props) {
const { nodes, materials, animations, scene } = useGLTF("assets/Bondi.glb");
const { clips } = useAnimations(animations);
const state = useThree();
nodes.Text.position.y = 100;
nodes.Circle.position.y = 150;
nodes.Text001.position.y = 62;
nodes.Circle001.position.y = 125;
nodes.Text002.position.y = 64;
nodes.Circle002.position.y = 127;
nodes.Text003.position.y = 64;
nodes.Circle003.position.y = 127;
let circleQuaternion = new Quaternion( 0.7071068286895752, 0, -0, 0.7071067094802856);
let textQuaternion = new Quaternion( 0.7071032524108887, 0.002244439208880067, -0.002244439208880067, 0.7071031928062439);
nodes.Text.quaternion.copy(textQuaternion);
nodes.Circle.quaternion.copy(circleQuaternion);
nodes.Text001.quaternion.copy(textQuaternion);
nodes.Circle001.quaternion.copy(circleQuaternion)
nodes.Text002.quaternion.copy(textQuaternion);
nodes.Circle002.quaternion.copy(circleQuaternion);
nodes.Text003.quaternion.copy(textQuaternion);
nodes.Circle003.quaternion.copy(circleQuaternion);

console.log(clips);

nodes.Cube004.scale.set(0,0,0);
nodes.Cube005.scale.set(0,0,0);
nodes.Cube006.scale.set(0,0,0);
nodes.Cube007.scale.set(0,0,0);

const createProjectile = (initialPosition, finalPosition,lengthCorrectionConstant, vertex, focalConstant, numberOfCubes,numOfProjectile, angleCorrection) => {
  let initialPositionNew = initialPosition.clone();
  initialPositionNew.y = vertex;
  let finalPositionNew = finalPosition.clone();
  finalPositionNew.y = vertex;
  let displacementVector = new Vector3().subVectors(finalPositionNew,initialPositionNew);
  displacementVector.setLength(displacementVector.length() + lengthCorrectionConstant)
  let focalDistance = (displacementVector.length()/2) * (displacementVector.length()/2)/ (-1*4*focalConstant);
     for (let i = 0; i < numberOfCubes; i++) {
     let displacementVectorNew = displacementVector.clone();
     displacementVectorNew.setLength(displacementVector.length()*(i/(numberOfCubes-1)));
     let xPosition = new Vector3().addVectors(initialPositionNew, displacementVectorNew);
     let yPosition = xPosition.clone();
     yPosition.y = (Math.pow((displacementVector.length()/2) - displacementVectorNew.length(),2) / (focalDistance*4)) + xPosition.y;
     let cube = nodes.Cube004.clone();
     let rotation
     rotation = new Euler(0,angleCorrection,Math.atan(2*((displacementVector.length()/2) - displacementVectorNew.length())/(4*focalDistance)));
     cube.position.copy(yPosition);
     cube.rotation.copy(rotation);
     cube.name = `cube${numOfProjectile}.${i}`;
     state.scene.add(cube);
     }

}

createProjectile(nodes.Cube004.position,nodes.Circle.position,50,160,120,30,1,0);
let circle = nodes.Circle.position.clone();
circle.y = 0;
let arrayOfMixers = [];
createProjectile(nodes.Circle001.position,circle,50,180,150,30,2,0.5);
createProjectile(nodes.Circle002.position,nodes.Circle001.position,0,70,50,6,3,-0.5);
createProjectile(nodes.Circle002.position,nodes.Circle003.position,0,50,10,3,4,-0.3);
let pos = state.scene.getObjectByName("cube2.29").position.clone();
    pos.x = pos.x + -400;
    pos.y = pos.y + 300;
    pos.z = pos.z + 200;


function createProjectileAnimationForward(numberOfProjectile, numberOfCubes, timeOffset, timeDivider){
  
for(let i = 0; i < numberOfCubes; i++) {
let times = [];
let values = [];
let CubeScale;
  for( let j = 0; j < numberOfCubes; j++)
  {
 if(i <= j)
  values.push(11.11,3.15,-3.9)
 else 
 values.push(0,0,0);
 times.push((j/((numberOfCubes - 1)/timeDivider)) + timeOffset);
}
  for(let i = 2; i <= 15; i++)
  {
    times.push(i);
    values.push(11.11,3.15,-3.9)
  }
  CubeScale =  new VectorKeyframeTrack(".scale", times , values);
  const cubeClip = new AnimationClip (`test${i}`, -1, [CubeScale]);
  const testMixer = new AnimationMixer(state.scene.getObjectByName(`cube${numberOfProjectile}.${i}`));
  arrayOfMixers.push(testMixer);
  testMixer.clipAction(cubeClip).play();
}

}

function createProjectileAnimationReverse(numberOfProjectile, numberOfCubes, timeOffset, timeDivider){
  
  for(let i = numberOfCubes-1; i >= 0 ; i--) {
  let times = [];
  let values = [];
  let CubeScale;
    for( let j = 0; j < numberOfCubes; j++)
    {
    if(i <= j)
    values.push(11.11,3.15,-3.9);
    else 
    values.push(0,0,0);
    
   times.push((j/((numberOfCubes - 1)/timeDivider)) + timeOffset);
  }
  for(let i = 2; i <= 15; i++)
  {
    times.push(i);
    values.push(11.11,3.15,-3.9)
  }
    CubeScale =  new VectorKeyframeTrack(".scale", times , values);
    const cubeClip = new AnimationClip (`proj${i}`, -1, [CubeScale]);
    const cubeMixer = new AnimationMixer(state.scene.getObjectByName(`cube${numberOfProjectile}.${numberOfCubes-i-1}`));
    arrayOfMixers.push(cubeMixer);
    cubeMixer.clipAction(cubeClip).play();
  }
  
  }

createProjectileAnimationForward(1,30,2,2);
createProjectileAnimationReverse(2,30,4,2);
createProjectileAnimationReverse(3,6,6,0.7);
createProjectileAnimationForward(4,3,8,0.2);





function createCircleAndTextAnimation (i , timeCorrection){
  let times = [];
  let values = [];
  for(let j = 0; j <= 60; j++){
    times.push(j/4);

    if (j/4 < (i*2) + 4 - timeCorrection){
      values.push(0,0,0)
    }
    else {
      values.push(23.53,23.53,23.53)
    }
  }
  const circleTrack = new VectorKeyframeTrack(".scale", times, values);
  const circleClip = new AnimationClip(`circleClip${i}`,-1,[circleTrack]);
  const circleMixer = new AnimationMixer(nodes[`Circle00${i}`]);
  circleMixer.clipAction(circleClip).play();
  const textTrack = new VectorKeyframeTrack(".scale", times, values);
  const textClip = new AnimationClip(`textClip${i}`,-1,[textTrack]);
  const textMixer = new AnimationMixer(nodes[`Text00${i}`]);
  textMixer.clipAction(textClip).play();
  arrayOfMixers.push(circleMixer,textMixer);
}

let times = [];
  let values = [];
  for(let j = 0; j <= 60; j++){
    times.push(j/4);

    if (j/4 < (0*2) + 4 - 0){
      values.push(0,0,0);
    }
    else {
      values.push(23.53,23.53,23.53)
    }
  }

  const circleTrack = new VectorKeyframeTrack(".scale", times, values);
  const circleClip = new AnimationClip(`circleClip`,-1,[circleTrack]);
  const circleMixer = new AnimationMixer(nodes[`Circle`]);
  circleMixer.clipAction(circleClip).play();
  const textTrack = new VectorKeyframeTrack(".scale", times, values);
  const textClip = new AnimationClip(`textClip`,-1,[textTrack]);
  const textMixer = new AnimationMixer(nodes[`Text`]);
  textMixer.clipAction(textClip).play();
  arrayOfMixers.push(circleMixer,textMixer);

createCircleAndTextAnimation(1,-0.1);
createCircleAndTextAnimation(2,0.8);
createCircleAndTextAnimation(3,1.3);

  useFrame((state, delta) => {
     for(let i = 0; i < arrayOfMixers.length; i++)
     {
       arrayOfMixers[i]?.update(delta);
     }
    
    state.camera.position.set(550,800,200)
    state.camera.lookAt(state.scene.getObjectByName("cube3.0").position);
    state.camera.zoom = 1;
    state.camera.updateProjectionMatrix();
 
   
})


  
  
  return (
    <>
    <group dispose={null}>
    <primitive  object={scene} />
    <PerspectiveCamera makeDefault  />
   <OrbitControls/>
    </group>
    </>
  );
}

