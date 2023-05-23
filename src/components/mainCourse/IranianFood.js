import React from 'react'
import { useQuery } from '@apollo/client';
import { useSelector,useDispatch } from 'react-redux';
import {GET_IRANIANFOODS_MENU} from '../../graphql/querys';
import { Grid, Card, Box, Typography, CardMedia, Button } from '@mui/material';
import  AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import  RemoveIcon  from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import trashIcon from '../../assest/Icon/trash.svg'

import styles from '../mainCourse/IranianFood.Module.css';
import {isInCart,quantityCount} from '../../helper/functions';

//Action
import {addItem,removeItem,increase,decrease} from '../../redux/cart/cartAction'



const IranianFood = () => {
  
 
  const dispatch=useDispatch();
  const state=useSelector(state => state.cartState)

    const{loading,data,errors}=useQuery(GET_IRANIANFOODS_MENU);
   
    console.log({data});
    
    if(loading) return  <h3>Loading ...</h3>
    if(errors) return <h3>Error ...</h3>
    const {iranianFoods:{title,image,id,slug,price}}=data;
    return (
      <Grid container  sx={{marginTop:"10px" , display:"flex" , flexWrap:"wrap" }}>


      {
         data.iranianFoods.map((item)=> 
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



                 <Box sx={{display:"flex" , justifyContent:"space-between" }} className={styles.buttonContainer}>
  
                    {/* <Box sx={{display:"flex" , flexDirection:"column" ,alignItems:"flex-start"}} >  
                       <Button>  <AddIcon sx={{backgroundColor:"#343A54" , color:"#ffff" , marginBottom:2}} /></Button> 
                       <Button>   <RemoveIcon sx={{backgroundColor:"#343A54" , color:"#ffff" }} /> </Button> 
                    </Box>
   */}
      {
              quantityCount(state, GET_IRANIANFOODS_MENU.id) ===1  && <button className={styles.smallButton} onClick={()=>dispatch(removeItem(GET_IRANIANFOODS_MENU))}><img src={trashIcon} alt="trash"/></button>
            }
             {quantityCount(state,  GET_IRANIANFOODS_MENU.id) > 1 && <button className={styles.smallButton} onClick={()=> dispatch(decrease(GET_IRANIANFOODS_MENU))}> <RemoveIcon sx={{backgroundColor:"#343A54" , color:"#ffff" }} /> </button>} 
             {quantityCount(state,  GET_IRANIANFOODS_MENU.id) > 0 && <span className={styles.counter}>{quantityCount(state, GET_IRANIANFOODS_MENU.id)}</span>}
       {
        isInCart(state, GET_IRANIANFOODS_MENU.id) ? <button className={styles.smallButton} onClick={()=> dispatch(increase(GET_IRANIANFOODS_MENU))}><AddIcon sx={{backgroundColor:"#343A54" , color:"#ffff" , marginBottom:2}} /></button>
        : <button onClick={()=> dispatch(addItem(GET_IRANIANFOODS_MENU))}>Add To Cart</button>
       }
      

                    <Box sx={{display:"flex",paddingBottom:5 }} mt={3} >
  
                  <AddShoppingCartIcon sx={{ color:"#343A54" ,marginRight:17}} />
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

export default IranianFood
