import { Canvas } from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei"
import "./Contact.scss"


import Usequery from "../Query";

const Earth = () => {
  
  const matches = Usequery()

 
 
  const earth = useGLTF("./planet/scene.gltf")
 ;
  return (  

    <primitive 
    object={earth.scene}
    scale = {!matches ? 1.8 : 1.6}
    position-y ={0}
    rotation-y = {0}
     />

   
  );
}

const EarthCanvas= () => {
  
  return(
    <Canvas
    className="ErthCanvas"
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    camera={{ 
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4 , 3, 6]


    }}
    >
      <OrbitControls 
      autoRotate
      enableZoom ={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />

    </Canvas>
  )
}
 
export default EarthCanvas;