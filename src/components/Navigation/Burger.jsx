import "./Burger.scss"


import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import NavItems from "./NavItems";

import { useState } from "react";

const Burger = () => {
  const [Burger, setBurger] = useState(false)

  const handleCklick = () =>{

    setBurger(!Burger)
    const navigationItems = document.getElementById("onMobileNav")

    if (!Burger){
      navigationItems.style.right = "20px"
    }else{
      navigationItems.style.right = "-100px"
    }
    
  }
  
  return ( 
    <div onClick={handleCklick} className='Burger'>
     
      {
        !Burger? 
        <MenuRoundedIcon />
        :
        <CloseRoundedIcon />
      }
      <div id="onMobileNav">
        <NavItems />
      </div>
    </div> 
  );
}
 
export default Burger;