import React from 'react'
import { Link } from 'react-router-dom';
import { Button, CardMedia, FormControl, FormHelperText, FormLabel, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import photo from '../../assest/photos/Header (3).jpg'
import styles from '../shared/Footer.module.css'


const Footer = () => {
  return (
    <Grid  mt={7} sx={{position:"relative"}} >
      <CardMedia component="image" image={photo} className={styles.card} sx={{backgroundRepeat:"no-repeat",width:"100%" , height:"90vh" ,position:"absolute" }} />
      <Grid item  sx={{display:"flex" , flexWrap:"wrap" ,justifyContent:"space-around",marginTop:10 , marginLeft:10, marginRight:10, paddingTop:2}}  >

  <Grid  xs style={{display:"flex" ,flexDirection:"column", marginTop:50 }} >

    <Grid style={{display:"flex" , flexWrap:"nowrap",marginBottom:100 , marginTop:90 }} sx={{position:"absolute"}} >
     <FmdGoodIcon sx={{  backgroundColor:"#343A54" ,color:"#ffffff" , marginRight:2}} fontSize="large" />
     <Typography component="p" variant='p' fontWeight={700} style={{color:"#ffffff"}} >Tehran,Ostadan St,Iran</Typography>
    </Grid>

    <Grid style={{display:"flex" , flexWrap:"nowrap",marginBottom:100}} sx={{position:"absolute"}} >
      <PermPhoneMsgIcon sx={{color:"#ffffff" , backgroundColor:"#343A54", marginRight:2}}fontSize="large"/>
      <Typography component="p" variant='p' fontWeight={700} style={{color:"#ffffff"}} >+989-9144880170</Typography>
    </Grid>

    <Grid style={{display:"flex" , flexWrap:"nowrap",marginTop:200,position:"absolute"}}  >
      <AccessAlarmIcon sx={{color:"#ffffff" , backgroundColor:"#343A54", marginRight:2}}fontSize="large"/>
      <Typography component="p" variant='p' fontWeight={700} style={{color:"#ffffff"}} >24 Hours</Typography>
    </Grid>
    
  </Grid>
  <Grid item xs  style={{display:"flex" ,flexDirection:"column",marginTop:50}} sx={{position:"absolute"}}>
  <Link to="/AboutUs" style={{ textDecoration:"none" ,fontWeight:700,color:"#ffffff", cursor:"pointer",marginBottom:90}} >About Us</Link>
  <Link to="/Gallery" style={{ textDecoration:"none" ,fontWeight:700,color:"#ffffff",cursor:"pointer",marginBottom:90}} >Gallery</Link>
  <Link to="/OnlineOrder" style={{ textDecoration:"none",fontWeight:700,color:"#ffffff" ,cursor:"pointer",marginBottom:90}} >Online Order</Link>
  <Link to="/" style={{ textDecoration:"none",fontWeight:700,color:"#ffffff" ,cursor:"pointer",marginBottom:90}} >Home Page</Link>
  </Grid>

  <Grid item xs={6}   >
  <FormControl  sx={{border:"1px solid  silver" , borderRadius:2 ,width:"350px"}}>
     
     <Typography component="p" variant="h6"
        style={{color:"#ffffff",alignItems:"center", 
       textAlign:"center",backgroundColor:"#343A54" ,width:"100%", gap: 2
        }}
       fontWeight={700} >Contact Us</Typography>
     
     <FormControl sx={{marginTop:5}}>
     <InputLabel htmlFor="my-input" sx={{color:"#ffffff"}}>First Name</InputLabel>
     <Input id="my-input" aria-describedby="my-helper-text" />
     <FormHelperText id="my-helper-text" >Please Type Your Name</FormHelperText>
     </FormControl>
     
     <FormControl>
     <InputLabel htmlFor="my-input"sx={{color:"#ffffff"}}>Last Name</InputLabel>
     <Input  aria-describedby="my-helper-text" />
     <FormHelperText id="my-helper-text">Please Type YourLast Name</FormHelperText>
     </FormControl>
     <FormControl>
     <InputLabel htmlFor="my-input"sx={{color:"#ffffff"}}>Email address</InputLabel>
     <Input id="my-input" aria-describedby="my-helper-text" />
     <FormHelperText id="my-helper-text">Please Type Your Email.</FormHelperText>
     </FormControl>
     <FormControl>
     <InputLabel htmlFor="my-input"sx={{color:"#ffffff"}}>Phon Number</InputLabel>
     <Input id="my-input" aria-describedby="my-helper-text" />
     <FormHelperText id="my-helper-text">Please Type Your Phon Number</FormHelperText>
     </FormControl>
     <FormControl>
     <FormLabel sx={{color:"#ffffff",textAlign:"center"}}>Comment</FormLabel>
     <TextField variant='outlined' minRows={3} /> 
     <FormHelperText>Please Write Your Comment</FormHelperText>
     </FormControl>
     <Button size="sm" sx={{backgroundColor:"#343A54" , color:"#ffffff"}}>Send</Button>
     </FormControl>
  </Grid>
 
  </Grid>
</Grid>
  )
}

export default Footer

