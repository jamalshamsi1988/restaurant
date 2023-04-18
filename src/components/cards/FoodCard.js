import React from 'react'
import { useQuery } from '@apollo/client';
import { CardMedia, Grid,Typography } from '@mui/material'


import { GET_MAINCOURSES} from '../../graphql/querys';


// import { Link } from 'react-router-dom';

const FoodCard = () => {

 const{loading,data,errors}=useQuery(GET_MAINCOURSES);
    

    if(loading) return  <h3>Loading ...</h3>
    if(errors) return <h3>Error ...</h3>

  return (
    <Grid container sx={{marginTop:"10px" , marginLeft:"10px" ,display:"flex" }} >
       
  {
    data.mainCourses.map((item)=><Grid item>

    <Typography component="h3" variant='h5' key={item.id} sx={{display:"flex" , flexWrap:"wrap" }} >{item.title}</Typography>
    <CardMedia  component="image"  image={item.image.url} sx={{height:70 , border:"1px solid silver" ,borderRadius:2}}  title={item.slug} />
    </Grid>
    ) 
  } 
 
 
</Grid>
    
  )
}

export default FoodCard

