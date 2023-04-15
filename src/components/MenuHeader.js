import React from 'react'
import CardMedia from '@mui/material/CardMedia';

import Image from '../photos/01.jpg';


const MenuHeader = () => {
  return (
    <div style={{position:"relative"}}>
        <CardMedia component="img" image={Image}  />
        <div style={{position:"absolute" , top:10 , left:"50%" , color:"white"}}>
                Restaurant Menu
        </div>
           
        
    </div>

  )
}

export default MenuHeader
