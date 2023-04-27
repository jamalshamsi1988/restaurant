import React from 'react'
import {  FormControl, FormHelperText, Grid, Input, InputLabel, Typography } from '@mui/material'
import photo from '../../photos/Header (3).jpg'
import CommentsBoxFooter from './CommentsBoxFooter'

const Footer = () => {
  return (
    <Grid container style={{ position:"relative"}} mt={5}>
   
      <img  src={photo} alt='FooterPhoto' style={{height:"80vh" , width:"100%" , opacity:"0.7"}}/>
       
        
 <FormControl sx={{display:"flex", flexDirection:"no-wrap",position:"absolute" , marginLeft:"10rem" ,border:"1px solid silver" , marginTop:5 , padding:5}} >
       
   <Typography component="p" variant="h6"
    style={{position:"absolute" , color:"#ffffff",alignItems:"center", textAlign:"center",backgroundColor:"#343A54" ,width:"100%" ,}}
    
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
  <CommentsBoxFooter />
</FormControl>

    </Grid>
  )
}

export default Footer
