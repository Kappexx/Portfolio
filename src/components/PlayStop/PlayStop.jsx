import "./PlayStop.scss"

import AdeleMusic from "../MP3/Adele.mp3"





import { useDispatch, useSelector} from "react-redux"

import {changeRotationState} from "../../features/Stars/stars-slice"
import Player from "./TestPlay";

const PlayStop = () => {
  
  // const [ PlayStop, setPlayStop] = useState(false)
  const PlayStop = useSelector(state => state.stars.rotation)
 
  
  
  
  const dispatch = useDispatch()


  
  const handlecklick = () =>{
 
    if(!PlayStop){
     
      
      dispatch(changeRotationState())
      // setPlayStop(!PlayStop)
    }else if(PlayStop){
    
      dispatch(changeRotationState())
      // setPlayStop(!PlayStop)
    }
   }

  return ( 
  <div onClick={handlecklick} >
    <div className="MusicAnimation">
   

      <p className={PlayStop? "span span1" : "span" }  ></p>

      <p className= {PlayStop? "span span2" : "span" }></p>

      <p className= {PlayStop? "span span3" : "span" }></p>

    </div>
    
    <Player url={AdeleMusic}/>

  </div> 
  );
}
 
export default PlayStop;