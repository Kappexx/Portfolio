import Burger from "./Burger";

import Usequery from "../Query";

import NavItems from "./NavItems";

const Navigation = () => {

  const matches = Usequery()

  return ( 
    <>
      {
        matches ? 
        <Burger /> 
        : 
        <NavItems />
      }
      
    </>
   );
}
 
export default Navigation;