import "./Stars.scss"

import { useRef} from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial,  Preload
 } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm"
import { useMemo } from "react";
import { useSelector} from "react-redux"

const Stars = () => {



  const rotation = useSelector(state => state.stars.rotation)
  
  
  const ref = useRef()
  // const sphere = random.inSphere(new Float32Array(6000), {radius: 1.2})

  // var start = new Date().getTime();


  const sphere = useMemo(()=>{
   
    return(
     random.inSphere(new Float32Array(6000), {radius: 2})
    )
    
  },[])
//   var end = new Date().getTime();
//   var time = end - start;
// console.log('Execution time: ' + time);
  
  useFrame((state, delta)=>{

    if(rotation){
       ref.current.rotation.x -=delta / 10
      ref.current.rotation.x -=delta  / 15
    }else{
      ref.current.rotation.x =delta / 10
      ref.current.rotation.x =delta  / 15
    }
   
  })

  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} > 
      <PointMaterial 
      transparent
      color = "#f272c8"
      size = {0.002}
      sizeAttenuation = {true}
      depthwrite={false}
      />
      </Points>
    </group>
   );
}

const StarsCanvas = () => {
  return (  
    <div className="StarsConteiner" >
     <Canvas
      camera={{position: [0, 0, 1]}} 
      >
        <Stars />
        <Preload  all/>
      </Canvas>
    </div>
  );
}
 
export default StarsCanvas;






