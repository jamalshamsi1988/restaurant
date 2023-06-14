import React,{useState} from 'react';


import { Typography,CardMedia, Card, CardHeader, Avatar, CardContent, CardActions,IconButton, Container} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';






import Food1 from "../assest/photos/soup1.jpg";
import Food2 from "../assest/photos/category2.jpg";
import Food3 from "../assest/photos/category3.jpg";
import logo from "../assest/photos/logo.webp"

const Cards = [
  {   
      id: "01",
      image: Food1,
      title:"Appetizers",
      logo:logo
  },
  {
      id: "02",
      image: Food2,
      title:"Dessert",
      logo:logo
     
  },
  {
      id: "03",
      image: Food3,
      title:"MainCourse",
      logo:logo
  }
]

const Category = () => {

      const [favorite , setFavorie]=useState(false);
      const clickHandeler =()=>{
        setFavorie(!favorite)
      }

    
  return (
<Container maxWidth="lg" spacing={3} padding={3} margin={3} sx={{display:"flex", paddingTop:"55px",flexGrow:"wrap",alignItems:"center"}} xs={12} md={8} mt={4}>
    {
      Cards.map((card) => 
    <Card key={card.id}  sx={{ maxWidth: 345 ,marginLeft:5 , boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4 }}   >
      <CardHeader
        avatar={
          <Avatar src={card.logo} sm={4} md={8} />
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={card.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={card.image}
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary"  >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon onClick={clickHandeler} sx={{color: favorite ? "#bcbcbc" : "red"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
      </Card>
      ) }
      </Container>
  )
}

export default Category
