import "./Skills.scss"
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, Preload, useTexture, OrbitControls } from "@react-three/drei";
import technologies from "./technologies"




import Usequery from "../Query";

const Ball = (props) =>{
  const [decal]= useTexture([props.imgUrl])
 
  
  const matches = Usequery()
  return(
    <Float 
    speed={1.5} 
    rotationIntensity={1} floatIntensity={2}
    >
      <ambientLight intensity={0.4} />
      {/* <directionalLight position={[0,0, 0.05]} /> */}
      <mesh castShadow receiveShadow scale={matches? 2: 2.2}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
         color= "#fff8eb" 
         polygonOffset
         polygonOffsetFactor={-1}
         flatShading
        />
        <Decal 
        position={[0,0,1]}
        rotation={[2 * Math.PI,0,6.25]}
        flatShading 
        map={decal}
        />
      </mesh>
    </Float>
  ) 
  }

const BallCanvas = ({icon, name}) => {

  

  const handleMouseOver = () => {

    document.getElementById("Tools").innerText = name

    
  }
  const handleLEave = () =>{

    document.getElementById("Tools").innerText = ""
  }
  return ( <div  
  onMouseOver={handleMouseOver}
  onMouseLeave={handleLEave}
  className="balls">

  <Canvas
      frameloop="demand"
      
      gl={{preserveDrawingBuffer: true}}
      >
      <Suspense >
        <OrbitControls 
        enableZoom ={false}
       />

        <Ball imgUrl = {icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  </div> );
}


const Skills = () => {
  return ( 
    <div className="SkillsConteiner">
       <h3>Skills.</h3>
       <div className="AllBalls">
        {
           technologies.map((item)=>{

            return(
              <BallCanvas key={item.name} icon={item.icon
              } name={item.name} />
            )
      }   )
    }
       </div>
    
     <p id="Tools" style={{width:"50px", height: "50px"}}></p>
   
  </div>
  )
}
 
export default Skills