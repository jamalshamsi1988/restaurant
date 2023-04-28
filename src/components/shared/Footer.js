import React from 'react'
import { Button, FormControl, FormHelperText, FormLabel, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import photo from '../../photos/Header (3).jpg'
import AboutUs from './../layout/aboutUs/AboutUs';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}  mt={5} sx={{display:"flex" , flexWrap:"wrap",justifyContent:"space-between"}} >
   
      <img  src={photo} alt='FooterPhoto' style={{height:"85vh" , width:"100%" , opacity:"0.7"}}/>

       <Grid item xs={2} sm={4} md={4}  sx={{position:"absolute" ,display:"flex",justifyContent:"space-between"}} >
       <FmdGoodIcon />
       <PermPhoneMsgIcon />
       <AccessAlarmIcon/>
       </Grid>
       
<Grid xs={2} sm={4} md={4}  sx={{position:"absolute"}}><Link to="/AboutUs" style={{color:"#ffffff", textDecoration:"none"}}>About Us</Link></Grid>

    <Grid item xs={2} sm={4} md={4}  mb={2} sx={{position:"absolute" ,
 border:"1px solid silver" ,
   marginTop:3,
    }}  >  
 <FormControl  >
       
   <Typography component="p" variant="h6"
    style={{position:"absolute" , color:"#ffffff",alignItems:"center", 
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
  <FormLabel sx={{color:"#ffffff"}}>Comment</FormLabel>
  <TextField variant='outlined' minRows={3} /> 
  <FormHelperText>Please Write Your Comment</FormHelperText>
</FormControl>
<Button size="sm" sx={{backgroundColor:"#343A54"}}>Send</Button>
</FormControl>
</Grid>

    </Grid>
  )
}

export default Footer
