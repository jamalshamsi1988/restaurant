import React, { useState } from 'react'
import {  CardMedia, Container, Grid, Typography } from '@mui/material'
import { GET_APPETIZERS } from '../../graphql/querys';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';




const Appetizers = ({info}) => {
 
    const{loading,data,errors}=useQuery( GET_APPETIZERS);
    const [active , setActive]=useState("IranianFood");
    
  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>
  return (
    <Container maxWidth="lg">
        <Grid container sx={{display:"flex" , flexDirection:"column"}} style={{position:"relative"}} marginTop={3} >
           {
              data.appetizers.map((item)=> <Grid item xs={12} md={5} mt={4} marginLeft={1} >
              <Typography component="h3" variant='h5' key={item.id} mb={3}  style={{position:"absolute" , color:"white",alignItems:"center"}} >
                {item.title}
              </Typography>
             
              <CardMedia component="image" image={item.image.url}
              sx={{height:100 ,width:160, border:"1px solid silver" ,borderRadius:2}}
                title={item.slug}
                />  
              </Grid>
              )
           }

        </Grid>
      
    </Container>
  )
}

export default Appetizers
