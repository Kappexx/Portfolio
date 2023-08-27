import useMediaQuery from '@mui/material/useMediaQuery'

const Usequery = () => {

  const matches = useMediaQuery('(max-width:480px)');

  return(
    matches
  )
  
}


export default Usequery