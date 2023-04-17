import React from 'react'
import { useQuery } from '@apollo/client';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MinimizeIcon from '@mui/icons-material/Minimize';


import { GET_ALLSOUPS } from '../../graphql/querys';

const SoupCard = () => {


    const{loading,data,errors}=useQuery(GET_ALLSOUPS);
    
    console.log({data});

        if(loading) return  <h3>Loading ...</h3>
        if(errors) return <h3>Error ...</h3>
       

  return (
    <Card container  spacing={4} sx={{marginTop:"10px" , marginLeft:"10px" , display:"flex" , flexWrap:"wrap" }}>
        {
           data.allSoups.map((item)=> 
                <Grid item  xs={12} sm={6} md={4}  key={item.id}>
                <Card sx={{ boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 , margin:"10px"}}  >
                   <CardMedia 
                   component="image"
                  sx={{height:194}}
                     image={item.image.url}
                     title={item.slug}
                   />
                    <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                   

                    <Typography variant="body2" color="text.secondary" >
                   {  item.description}
                     </Typography>
                   
                   </CardContent>
              <CardActions>
                    
                     <AddIcon/>
                    <AddShoppingCartIcon />
                    <MinimizeIcon/>
              
                    </CardActions>
                 </Card> 
                </Grid>
               
            )
            
        }
       </Card>
  )
}

export default SoupCard;
