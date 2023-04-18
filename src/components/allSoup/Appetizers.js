import React from 'react'
import { CardMedia, Container, Grid, Typography } from '@mui/material'
import { GET_APPETIZERS } from '../../graphql/querys';
import { useQuery } from '@apollo/client';

const Appetizers = () => {
    const{loading,data,errors}=useQuery( GET_APPETIZERS);
  
    
  console.log({data});

      if(loading) return  <h3>Loading ...</h3>
      if(errors) return <h3>Error ...</h3>
  return (
    <Container maxWidth="lg">
        <Grid container>
           {
              data.appetizers.map((item)=> <Grid item xs={12} md={3} mt={4}>
            
              <Typography component="h3" variant='h5' key={item.id} mb={3}>
                {item.title}
              </Typography>
             
              <CardMedia component="image" image={item.image.url} sx={{height:70 , border:"1px solid silver" ,borderRadius:2}}  title={item.slug}/>
              </Grid>
              )
           }

        </Grid>
      
    </Container>
  )
}

export default Appetizers
