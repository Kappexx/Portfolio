import "./NavItems.scss"
import { useState} from "react";


const backgroundcolor = "#F71515"

const NavItems = () => {
  const [wichElement, setWichElement] = useState(false)
 

  const haandleCklick = (e) => {
    
    // aq opasits vwevt dabla wina daklikuli elementisas
    if(wichElement){
      document.getElementById(wichElement).style.opacity = 0.5
    }
 
    const CurrentActiveName = e.target.name
    
    const myelement = document.getElementById(CurrentActiveName)

    if(CurrentActiveName){
      myelement.style.opacity = 0.9
      myelement.onmouseover = function(){
        this.style.opacity = 0.9
      }
      myelement.onmouseleave = function(){
        this.style.opacity = 0.5
      }
      
    }
   
    
    setWichElement(e.target.name)
    
  }

  
  

  return ( 
    <div className="Navitems">
      
           <a 
           href="#" 
           style={wichElement === "About" ? {color: `${backgroundcolor}`} : {color : "white"}}
            onClick={haandleCklick} name= "About">About
            </a>
      
     

        <a href="#Test" style={wichElement === "Projects" ? {color: `${backgroundcolor}`} : {color : "white"}} onClick={haandleCklick} name= "Projects">Projects</a>

        <a href="#Contact" style={wichElement === "Contact" ? {color: `${backgroundcolor}`} : {color : "white"}} onClick={haandleCklick} name= "Contact">Contact</a>
    </div>
   );
}
 
export default NavItems;