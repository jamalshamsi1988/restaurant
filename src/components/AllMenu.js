import React, {  useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Container, Grid } from '@mui/material';
import {  GET_ALLSOUPS, GET_APPETIZERS, GET_FASTFOODS_MENU, GET_IRANIANFOODS_MENU, GET_MAINCOURSES, GET_SALAD_MENU } from '../graphql/querys';
import SoupCard from './appetizer/SoupCard';
import SaladCard from './appetizer/SaladCard'
import IranianFood from './mainCourse/IranianFood';
import FastFoodCard from './mainCourse/FastFoodCard';

import soup from '../assest/photos/soup1.jpg'
import salad from '../assest/photos/frut-salad.jpg'
import iranianFood from '../assest/photos/Iranian-dish.jpg'
import fastFood from '../assest/photos/newberger.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './../redux/product/productAction';




const AllMenu = () => {

  const dispatch=useDispatch();
  const productState=useSelector(state => state.productsState);
 useEffect(()=>{
 if(!productState.products.length) dispatch(fetchProducts());
 },[])

  const{loading,data,errors}=useQuery( GET_MAINCOURSES);

  const[active,setActive]=useState("iranianFood");

  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container marginLeft={3}>
      <Grid item   md={3} mt={8} sx={{display:"flex" ,flexDirection:"column"}} >
        
<Grid item xs={3}>

     <Button  onClick={()=> setActive("allSoup")} 
    sx={{backgroundImage:`url(${soup})`,backgroundRepeat:"no-repeat",width:"10rem" , height:"8rem", borderRadius:"20%",
    backgroundColor:"black",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",
    color:"#ffffff",fontWeight:"700"}}> soup  </Button>
</Grid>

<Grid item xs={3} >

     <Button onClick={()=> setActive("saladMenu")}
    sx={{backgroundImage:`url(${salad})`,backgroundRepeat:"no-repeat",width:"10rem" , height:"8rem", borderRadius:"20%",
    backgroundColor:"black",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",color:"#ffffff",fontWeight:"700"}}>salad</Button>
</Grid>

<Grid item xs={3}>

     <Button onClick={()=> setActive("iranianFood")} 
   sx={{backgroundImage:`url(${iranianFood})`,backgroundRepeat:"no-repeat",width:"10rem" , height:"8rem", borderRadius:"20%",
    backgroundColor:"black",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",color:"#ffffff",fontWeight:"700"}}>iranianFood</Button>
</Grid>

<Grid item xs={3}>

     <Button onClick={()=> setActive("fastFood")}
    sx={{backgroundImage:`url(${fastFood})`,backgroundRepeat:"no-repeat",width:"10rem" , height:"8rem", borderRadius:"20%",
    backgroundColor:"black",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",color:"#ffffff",fontWeight:"700"}}>fastFood</Button>
</Grid>

     
        </Grid>

        <Grid item xs={12} md={9} mt={7}>
      
           {/* All Food and Soup and Salad cards  */}
           
      {active === "allSoup" && <SoupCard data={GET_ALLSOUPS} />}
      {active === "saladMenu" && <SaladCard data={GET_SALAD_MENU} />}
      {active === "fastFood" && <FastFoodCard data={GET_FASTFOODS_MENU} />}
    
       {active === "iranianFood" && <IranianFood data={GET_IRANIANFOODS_MENU} />} 
{/* {
  
      active === "iranianFood" &&
    
       data.iranianFoods.map((product) => <IranianFood 
        key={product.id}
        data={GET_IRANIANFOODS_MENU} 
      />
     
      
      )
     }  */}
        </Grid>
        </Grid>
      
    </Container>
  )
}

export default AllMenu
