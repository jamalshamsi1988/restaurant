import React from 'react';
import {  Container, Grid, Typography } from '@mui/material';
import {  GET_APPETIZERS } from '../../graphql/querys';
import SoupCard from '../allSoup/SoupCard';
import { useQuery } from '@apollo/client';
import FoodCard from './FoodCard';
import Appetizers from '../allSoup/Appetizers';
import { Link } from 'react-router-dom';



const AllMenu = () => {

  const{loading,data,errors}=useQuery( GET_APPETIZERS);
  
    
  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container marginLeft={3}>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant='h5'>
            Restaurant Menu
          </Typography>

          {/* All Food and Soup and Salad cards  */}
          <SoupCard />
    
        </Grid>
        <Grid item xs={12} md={3} mt={4} >

        <Appetizers />
       <FoodCard />
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default AllMenu
