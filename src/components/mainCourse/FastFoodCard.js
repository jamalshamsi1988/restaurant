import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_FASTFOODS_MENU } from '../../graphql/querys';
import { Grid, Card, Box, Typography, CardMedia, Button } from '@mui/material';

import Cards from '../shared/Add-Remove-Function';
import AddRemoveFunction from '../shared/Add-Remove-Function';

import styles from './FastFood.module.css';





const FastFoodCard = () => {
 

  const{loading,data,errors}=useQuery(GET_FASTFOODS_MENU);
    
  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>
      
     const{fastFoods:{title,slug,image,price}}=data;

  return (
    <Grid container className={styles.container}  sx={{marginTop:"10px" , display:"flex" , flexWrap:"wrap" }}>


    {
       data.fastFoods.map((item)=> 
            <Grid item  xs={12}  md={4} key={item.id} >
            <Card sx={{ boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 , margin:"10px"}} >
               <CardMedia 
               component="image"
              sx={{height:194}}
                 image={item.image.url}
                 title={item.slug}
               />
                <Box sx={{backgroundColor:"#E9E9E9", alignItems:"center", textAlign:"center" }} >
                      <Typography gutterBottom variant="h5" component="div" color="#122C32" fontWeight={600}>
                        {item.title}
                      </Typography>
               </Box>



               <Box sx={{display:"flex" , justifyContent:"space-between" }}>

    
                  <AddRemoveFunction />

                  <Box sx={{display:"flex",paddingBottom:5 }} mt={3} >
                <Typography variant="p" color="text.secondary" fontWeight="bold"  >
                        {item.price}
                 </Typography>
                  </Box> 
               </Box>
           
          
             </Card> 
            </Grid>
           
        
        
      )} 
      


   </Grid>
  )
}

export default FastFoodCard;
