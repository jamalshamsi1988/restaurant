import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_FASTFOODS_MENU } from '../../graphql/querys';
import { Grid, Card, Box, Typography, CardMedia, Button } from '@mui/material';
import  AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import  RemoveIcon  from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const FastFoodCard = () => {
  
  const{loading,data,errors}=useQuery(GET_FASTFOODS_MENU);
    
  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>
  return (
    <Grid container  sx={{marginTop:"10px" , display:"flex" , flexWrap:"wrap" }}>
    {
       data.fastFoods.map((item)=> 
            <Grid item  xs={6}  md={4}  key={item.id}>
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

                  <Box sx={{display:"flex" , flexDirection:"column" ,alignItems:"flex-start"}}>  
                   <Button>   <AddIcon sx={{backgroundColor:"#343A54" , color:"#ffff" , marginBottom:2}} /></Button> 
                   <Button>   <RemoveIcon sx={{backgroundColor:"#343A54" , color:"#ffff" }} /> </Button> 
                  </Box>

                  <Box sx={{display:"flex",paddingBottom:5 }} mt={3} >

                <AddShoppingCartIcon sx={{ color:"#343A54" ,marginRight:17}} />
                <Typography variant="p" color="text.secondary" fontWeight="bold" marginRight={0.8} >
                        {item.price}
                 </Typography>
                  </Box>
               </Box>
           
          
             </Card> 
            </Grid>
           
        )
        
    }
   </Grid>
  )
}

export default FastFoodCard;
