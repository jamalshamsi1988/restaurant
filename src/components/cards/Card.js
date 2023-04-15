import React from 'react'
import { Box, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import CardActions from '@mui/material/CardActions';

import food from '../../photos/ks_079.jpg';

const Card = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <CardMedia src={food} />
        <Typography component="h1" variant='h1'>right</Typography>
        </Grid>
          
        </Grid>
    </Box>
      )
}

export default Card
