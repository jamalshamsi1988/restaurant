import React from 'react'
import {  Card, CardActions, CardContent, CardMedia,Grid,Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MinimizeIcon from '@mui/icons-material/Minimize';

import food from '../../photos/soup1.jpg';
import { useQuery } from '@apollo/client';
import {GET_APPETIZERS} from '../../graphql/querys';
// import { Link } from 'react-router-dom';

const FoodCard = () => {

 const{loading,data,errors}=useQuery(GET_APPETIZERS);
    
console.log({data});
    if(loading) return  <h3>Loading ...</h3>
    if(errors) return <h3>Error ...</h3>

  return (
    <Grid container spacing={2} sx={{marginTop:"10px" , marginLeft:"10px"}}>
  <Grid item xs={8}>
  <Card sx={{ maxWidth: 345 }} >
     <CardMedia 
     sx={{ height: 140 }}
       image={food}
       title="green iguana"
     />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
       </Typography>
     </CardContent>
<CardActions>
      
       <AddIcon/>
      <AddShoppingCartIcon />
      <MinimizeIcon/>

      </CardActions>
   </Card> 
  </Grid>
  <Grid item xs={4}>
  {/* <Link to={`/appetizers/${appetizers.slug}`} style={{display:"flex" , alignItems:"center" , textDecoration:"none"}}> */}
  {/* </Link> */}
  <Typography component="h3" variant='h4'></Typography>
  
  </Grid>

</Grid>
    
  )
}

export default FoodCard

{/* 
// <Box mt={10} sx={{marginLeft:10}}>
// <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
//    <Grid item xs={8}>
//    <Card sx={{ maxWidth: 345 }} >
//      <CardMedia */}
{/* //        sx={{ height: 140 }}
//        image={food}
//        title="green iguana"
//      />
//      <CardContent>
//        <Typography gutterBottom variant="h5" component="div">
//          Lizard
//        </Typography>
//        <Typography variant="body2" color="text.secondary">
//          Lizards are a widespread group of squamate reptiles, with over 6,000
//          species, ranging across all continents except Antarctica
//        </Typography>
//      </CardContent>
//      <CardActions>
      
//        <AddIcon/>
//        <AddShoppingCartIcon />
//        <MinimizeIcon/>

//      </CardActions>
//    </Card> */}
{/* //    </Grid> */}

//    </Grid>
//    <Grid item xs={4}><Typography component="h1" variant="h3">This is right section</Typography></Grid>
  
//    </Box>