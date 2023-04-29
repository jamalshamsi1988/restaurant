import React from 'react'
import { Box, Button, CardMedia, FormControl, FormHelperText, FormLabel, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import photo from '../../photos/Header (3).jpg'
import AboutUs from './../layout/aboutUs/AboutUs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          color:'#ffffff',
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});



const Footer = () => {
  return (
    <Grid  mt={7} sx={{position:"relative"}} >
      {/* <img  src={photo} alt='FooterPhoto' sx={{position:"relative"}} style={{height:"85vh" , width:"100%" , opacity:"0.7"}}/> */}
      <CardMedia component="image" image={photo}  sx={{backgroundRepeat:"no-repeat",width:"100%" , height:"88vh" ,position:"absolute",backgroundColor:"black" ,backdropFilter:"8px"}} />
      <Grid item  sx={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , margin:5 , paddingTop:2}}  >
  <Grid item xs sx={{display:"flex" , flexDirection:"column" }} >
 
  <ThemeProvider theme={theme}>
    <Grid style={{display:"flex" , flexWrap:"nowrap",marginBottom:100 , marginTop:90}} >

     <FmdGoodIcon sx={{  backgroundColor:"#343A54" ,color:"#ffffff" , marginRight:2}} fontSize="large" />
     <Typography component="p" variant='p' fontWeight={700} style={{color:"#000000"}} >Tehran,Ostadan St,Iran</Typography>
    </Grid>
    <Grid style={{display:"flex" , flexWrap:"nowrap",marginBottom:100}}>
      <PermPhoneMsgIcon sx={{color:"#ffffff" , backgroundColor:"#343A54", marginRight:2}}fontSize="large"/>
      <Typography component="p" variant='p' fontWeight={700} style={{color:"#000000"}} >+989-9144880170</Typography>
    </Grid>
    <Grid style={{display:"flex" , flexWrap:"nowrap",marginBottom:100}}>
     <AccessAlarmIcon sx={{color:"#ffffff" , backgroundColor:"#343A54", marginRight:2}}fontSize="large"/>
     <Typography component="p" variant='p' fontWeight={700} style={{color:"#000000"}} >Tehran,Ostadan St,Iran</Typography>
    </Grid>
     </ThemeProvider>

  </Grid>
  <Grid item xs  style={{display:"flex" ,flexDirection:"column",marginTop:50}} sx={{position:"absolute"}}>
  <Link to="/AboutUs" style={{ textDecoration:"none" ,fontWeight:700,color:"black", cursor:"pointer",marginBottom:90}} >About Us</Link>
  <Link to="/Gallery" style={{ textDecoration:"none" ,fontWeight:700,color:"black",cursor:"pointer",marginBottom:90}} >Gallery</Link>
  <Link to="/OnlineOrder" style={{ textDecoration:"none",fontWeight:700,color:"black" ,cursor:"pointer",marginBottom:90}} >Online Order</Link>
  <Link to="/" style={{ textDecoration:"none",fontWeight:700,color:"black" ,cursor:"pointer",marginBottom:90}} >Home Page</Link>


  </Grid>
  <Grid item xs={6}  >
  <FormControl  >
     
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
     <FormLabel sx={{color:"#ffffff"}}>Comment</FormLabel>
     <TextField variant='outlined' minRows={3} /> 
     <FormHelperText>Please Write Your Comment</FormHelperText>
     </FormControl>
     <Button size="sm" sx={{backgroundColor:"#343A54"}}>Send</Button>
     </FormControl>
  </Grid>
 
  </Grid>
</Grid>
  )
}

export default Footer



// <Grid container spacing={{ xs: 2, md: 3 }}  mt={5} sx={{display:"flex" , flexWrap:"wrap",justifyContent:"space-between"}} >
// <img  src={photo} alt='FooterPhoto' style={{height:"85vh" , width:"100%" , opacity:"0.7"}}/>

//      <Grid item xs sx={{position:"absolute" ,display:"flex",justifyContent:"space-between"}} >
//      <FmdGoodIcon />
//      <PermPhoneMsgIcon />
//      <AccessAlarmIcon/>
//      </Grid>
     
// <Grid xs={6}   sx={{position:"absolute"}}><Link to="/AboutUs" style={{color:"#ffffff", textDecoration:"none"}}>About Us</Link></Grid>

//   <Grid item xs  mb={2} sx={{position:"absolute" ,
// border:"1px solid silver" ,
//  marginTop:3,
//   }}  >  
// <FormControl  >
     
//  <Typography component="p" variant="h6"
//   style={{position:"absolute" , color:"#ffffff",alignItems:"center", 
//   textAlign:"center",backgroundColor:"#343A54" ,width:"100%", gap: 2
//    }}
//   fontWeight={700} >Contact Us</Typography>

// <FormControl sx={{marginTop:5}}>
// <InputLabel htmlFor="my-input" sx={{color:"#ffffff"}}>First Name</InputLabel>
// <Input id="my-input" aria-describedby="my-helper-text" />
// <FormHelperText id="my-helper-text" >Please Type Your Name</FormHelperText>
// </FormControl>

// <FormControl>
// <InputLabel htmlFor="my-input"sx={{color:"#ffffff"}}>Last Name</InputLabel>
// <Input  aria-describedby="my-helper-text" />
// <FormHelperText id="my-helper-text">Please Type YourLast Name</FormHelperText>
// </FormControl>
// <FormControl>
// <InputLabel htmlFor="my-input"sx={{color:"#ffffff"}}>Email address</InputLabel>
// <Input id="my-input" aria-describedby="my-helper-text" />
// <FormHelperText id="my-helper-text">Please Type Your Email.</FormHelperText>
// </FormControl>
// <FormControl>
// <InputLabel htmlFor="my-input"sx={{color:"#ffffff"}}>Phon Number</InputLabel>
// <Input id="my-input" aria-describedby="my-helper-text" />
// <FormHelperText id="my-helper-text">Please Type Your Phon Number</FormHelperText>
// </FormControl>
// <FormControl>
// <FormLabel sx={{color:"#ffffff"}}>Comment</FormLabel>
// <TextField variant='outlined' minRows={3} /> 
// <FormHelperText>Please Write Your Comment</FormHelperText>
// </FormControl>
// <Button size="sm" sx={{backgroundColor:"#343A54"}}>Send</Button>
// </FormControl>
// </Grid>

