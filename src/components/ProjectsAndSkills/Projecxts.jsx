import "./Projects.scss"

import { useState } from "react";

import {Projects_test} from "../../constants/index"

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Project = ({id, name, github, video, description, active }) => {
  const [See, setSee] = useState(false)
  
  const toggle = () => setSee(state => !state)

  const handlecklick = (id) =>{
    
    const element = document.getElementById(id)
    element.style.transition ="all  0.3s"
    element.className = "VideoRewiev"
    
   
  }
 
  const handlecloseClikc = (id) => {

    const element = document.getElementById(id)
    element.className = "videoBigining"

  }
  return (  
    <>
     
      <div id={id}     className="videoBigining">
        <video src={video} muted width="100%" height="100" controls="controls">
        
        </video>
      
      <span className="close" onClick={()=>handlecloseClikc(id)}>X</span>
     
    </div>

      <p className="Name">{name}</p>
      
      
     <div className="CurrentStatus">
      <span>
        {
          active && <a href={github} target="_blanck"> 

          Github Source Code

          <OpenInNewIcon fontSize="small"/>
          </a> 
        }
        
      </span>
      &nbsp;
      &nbsp;
      <span>
        {
          id == 2? <a href="https://gkap.pythonanywhere.com/" target="_blanck"> See Website <OpenInNewIcon fontSize="small"/></a> : <a   onClick={()=>{
            active && handlecklick(id)
            
          }}> 
          {active? "Video Review": "Working Progress" }
          
          </a>
        }
      
      </span>
     </div>
      <p 
      onClick={toggle}
      className="Description">
        
        {!See? description.substring(0, 100) : description }
      
        
      <span 
      
      className="MoreLess">
        {!See ? "See More ..." : "Less ..." }
      
      </span></p>
     
    </>
  );
}
 


const Projects = () => {
  return ( 
    <div 
    
    className="Projects">
     
      <h2 >
        Projects. 
        
      </h2>
      

     
      {
        Projects_test.map((item)=>{

          return(
            <Project 
            id={item.id}
            key={item.id}
            name={item.name}
            github={item.github}
            video={item.video}
            description={item.description}
            active = {item.active}
            />
          )
        })
      }
     
    </div>
   );
}
 
export default Projects;