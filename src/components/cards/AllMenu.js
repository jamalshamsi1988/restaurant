import React from 'react';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import {  GET_APPETIZERS } from '../../graphql/querys';
import SoupCard from '../allSoup/SoupCard';
import { useQuery } from '@apollo/client';
import FoodCard from './FoodCard';
import Appetizers from '../allSoup/Appetizers';
import DrinksCard from '../drink/DrinksCard';


const AllMenu = () => {

  const{loading,data,errors}=useQuery( GET_APPETIZERS);
  
    
  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant='h5'>
            Restaurant Menu
          </Typography>
          <SoupCard />
          <DrinksCard />
        </Grid>
        <Grid item xs={12} md={3} mt={4} sx={{boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 }}>

        <Appetizers />
        <FoodCard />
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default AllMenu
