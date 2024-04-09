import React ,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import{
  Decal,Float , OrbitControls,Preload ,useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader';
import { IcosahedronGeometry } from 'three';

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0 , 0.05]}/>
      <mesh  castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1,1]}/>
      <meshStandardMaterial 
        color="#fff8eb"
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal
          position={[0 , 0 , 1]}
          rotation={[ 2 * Math.PI , 0 , 6.25]}
          flatShading
          map={decal}
        />
      </mesh>

    </Float>
  )
}

const BallCanvas = ({icon}) =>{
  return(
<Canvas
  shadowMap
  frameloop='demand'
  dpr={[1, 2]}
  gl={{ preserveDrawingBuffer: true }}
>
  <Suspense fallback={<CanvasLoader />}>
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.5} />
    <directionalLight
      position={[5, 5, 5]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <Ball imgUrl={icon}/>
  </Suspense>
  <Preload all />
</Canvas>
  )
}

export default BallCanvas