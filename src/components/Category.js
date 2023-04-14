import React,{useState} from 'react';
import { useQuery } from '@apollo/client';

import { Typography,CardMedia, Card, CardHeader, Avatar, CardContent, CardActions,IconButton, Container} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';


//Query
import { GET_MENUS } from '../graphql/querys';

import Food from "../photos/Header (1).jpg"

const Category = () => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      const{loading , data , errors}=useQuery(GET_MENUS);

      if(loading) return <h1>hi...</h1>
      if(errors) return <h4>Error ...</h4>
      
    console.log({data});
    
  return (
 <Container maxWidth="lg" spacing={3} padding={3} sx={{display:"flex", paddingTop:"55px"}} >

    <Card sx={{ maxWidth: 345 ,marginLeft:5 , boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 }} xs={12} sm={6} md={4}  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={Food}
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
      </Card>

      <Card sx={{ maxWidth: 345 ,marginLeft:5 , boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 }}  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={Food}
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
      </Card>
      <Card sx={{ maxWidth: 345 ,marginLeft:5 , boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 }}  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={Food}
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
      </Card>
      </Container>
  )
}

export default Category
