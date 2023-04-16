import React from 'react'
import CardMedia from '@mui/material/CardMedia';

import Image from '../photos/01.jpg';
import { Box } from '@mui/material';


const MenuHeader = () => {
  return (
    <Box style={{position:"relative"}} mt={10}>
        <CardMedia component="img" image={Image}  sx={{width:"100%" , height:"50vh" ,backgroundRepeat:"no-repeat",
    backgroundColor:"black",
    backgroundPosition:"center",
    backgroundAttachment:"fixed"}} />
        <div style={{position:"absolute" , top:90 , left:"45%" , color:"white" ,fontWeight:700, fontSize:"1.2rem"}}>
                Restaurant Menu
        </div>
           
        
    </Box>

  )
}

export default MenuHeader
