import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Container, Grid } from '@mui/material';
import {  GET_APPETIZERS } from '../graphql/querys';
import SoupCard from './appetizer/SoupCard';
import SaladCard from './appetizer/SaladCard'
import MainCourseCard from './mainCourse/MainCourseCard';
import Appetizers from './appetizer/Appetizers';
import IranianFood from './mainCourse/IranianFood';
import FastFoodCard from './mainCourse/FastFoodCard';





const AllMenu = ({info}) => {

  const{loading,data,errors}=useQuery( GET_APPETIZERS);
  

  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container marginLeft={3}>
      <Grid item xs={12} md={3} mt={4} >

      <Appetizers data={info} /> 
     <Appetizers data={info} /> 
      <MainCourseCard  data={info}  /> 
      <MainCourseCard data={info} /> 
      
       
        </Grid>

        <Grid item xs={12} md={9} mt={8}>
          {/* All Food and Soup and Salad cards  */}
          <SoupCard />
          <SaladCard />
          <IranianFood />
          <FastFoodCard />   
        </Grid>
        </Grid>
      
    </Container>
  )
}

export default AllMenu
