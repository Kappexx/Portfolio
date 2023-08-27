
import React, { useState, useEffect } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Usequery from "../Query";

import { useDispatch} from "react-redux"
import {changeRotationState} from "../../features/Stars/stars-slice"


const useAudio = url => {
  const [audio] = useState(new Audio(url));
  audio.volume = 0.2
  const [playing, setPlaying] = useState(false);
  
  const dispatch = useDispatch()
  

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setPlaying(false)
      dispatch(changeRotationState())
    } );
    return () => {
      audio.removeEventListener('ended', () =>  setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  const matches = Usequery()

  return (
    <div onClick={toggle}>
      {
      !playing ? 
      <PlayCircleIcon 
      
      className="PlayStopIcon" fontSize= {matches ? "medium": "large"} 
       
      /> 
     
      :
      <StopCircleIcon 
      className="PlayStopIcon" 
      fontSize= {matches ? "medium": "large"}
        />}

    </div>
  );
};

export default Player;