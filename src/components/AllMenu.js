import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Container, Grid } from '@mui/material';
import {  GET_ALLSOUPS, GET_APPETIZERS, GET_FASTFOODS_MENU, GET_IRANIANFOODS_MENU, GET_SALAD_MENU } from '../graphql/querys';
import SoupCard from './appetizer/SoupCard';
import SaladCard from './appetizer/SaladCard'
import MainCourseCard from './mainCourse/MainCourseCard';
import Appetizers from './appetizer/Appetizers';
import IranianFood from './mainCourse/IranianFood';
import FastFoodCard from './mainCourse/FastFoodCard';
import NewAppetizers from './NewAppetizers';
import { useParams } from 'react-router-dom';





const AllMenu = () => {
const{slug}=useParams();
  const{loading,data,errors}=useQuery( GET_APPETIZERS);
  
  const[active,setActive]=useState("allSoup");

  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container marginLeft={3}>
      <Grid item xs={12} md={3} mt={4} >
     
     <Button onClick={()=> setActive("allSoup")}>soup</Button>
     <Button onClick={()=> setActive("saladMenu")}>salad</Button>
     <Button onClick={()=> setActive("iranianFood")}>iranianFood</Button>
     <Button onClick={()=> setActive("fastFood")}>fastFood</Button>
     
        </Grid>

        <Grid item xs={12} md={9} mt={8}>
               {/* All Food and Soup and Salad cards  */}
      {active === "allSoup" && <SoupCard data={GET_ALLSOUPS} cardIndex={data.id}/>}
      {active === "saladMenu" && <SaladCard data={GET_SALAD_MENU} cardIndex={data.id}/>}
      {active === "iranianFood" && <IranianFood data={GET_IRANIANFOODS_MENU} cardIndex={data.id}/>}
      {active === "fastFood" && <FastFoodCard data={GET_FASTFOODS_MENU} cardIndex={data.id}/>}
     
         
        </Grid>
        </Grid>
      
    </Container>
  )
}

export default AllMenu
