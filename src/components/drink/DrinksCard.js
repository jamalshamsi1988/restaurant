import React from 'react'
import { GET_DRINKS } from '../../graphql/querys';
import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';

const DrinksCard = () => {
    const{loading,data,errors}=useQuery( GET_DRINKS);
  
    
    console.log({data});
  
        if(loading) return  <h3>Loading ...</h3>
        if(errors) return <h3>Error ...</h3>
  return (
    <Container maxWidth="lg">
    <Grid container>
       {
          data.drinks.map((item)=> <Grid item xs={12} md={3} mt={4}>
        
          <Typography component="h3" variant='h5' key={item.id} mb={3}>
            {item.title}
          </Typography>
         
          <CardMedia component="image" image={item.image.url} sx={{height:70  ,borderRadius:2}}  title={item.slug}/>
          </Grid>
          )
       }

    </Grid>
  
</Container>
  )
}

export default DrinksCard
