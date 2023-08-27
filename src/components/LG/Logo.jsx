import "./Logo.scss"

import logoPng from "../../Logo/logo.png"
import Usequery from "../Query";

const Logo = () => {
  const matches = Usequery()
  return ( 
    
      
    <img onClick={
      ()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    } className="LogoPng" src={logoPng} alt="Logo" width={matches? 50 : 70}  />
      
   
  );
}
 
export default Logo;