import React from 'react'
import CardMedia from '@mui/material/CardMedia';

import Image from '../photos/01.jpg';


const MenuHeader = () => {
  return (
    <div style={{position:"relative"}}>
        <CardMedia component="img" image={Image} sx={{width:"100%" , height:"50vh"}} />
        <div style={{position:"absolute" , top:90 , left:"45%" , color:"white" ,fontWeight:700, fontSize:"1.2rem"}}>
                Restaurant Menu
        </div>
           
        
    </div>

  )
}

export default MenuHeader
