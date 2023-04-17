import React from 'react'
import {  Card, CardActions, CardContent, CardMedia,Grid,Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MinimizeIcon from '@mui/icons-material/Minimize';

import food from '../../photos/soup1.jpg';
import { useQuery } from '@apollo/client';
import {GET_APPETIZERS} from '../../graphql/querys';
import SoupCard from '../allSoup/SoupCard';

// import { Link } from 'react-router-dom';

const FoodCard = () => {

 const{loading,data,errors}=useQuery(GET_APPETIZERS);
    

    if(loading) return  <h3>Loading ...</h3>
    if(errors) return <h3>Error ...</h3>

  return (
    <Grid container  spacing={4} sx={{marginTop:"10px" , marginLeft:"10px" ,display:"flex" }} >
       <Grid item xs={8} >
          <SoupCard />
          </Grid>
  <Grid item xs={4}  >
  {
    data.appetizers.map((item)=>
    <Typography component="h3" variant='h4' key={item.id} sx={{display:"flex" , flexWrap:"wrap" }} >{item.title}</Typography>
    ) 
  }
 
 </Grid>
</Grid>
    
  )
}

export default FoodCard

