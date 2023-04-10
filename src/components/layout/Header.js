import React from 'react';
import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';





  
const Header = () => {
  return (
    <AppBar position="sticky">
        <Container sx={{justifyContent:"space-between"}} >
        <Toolbar >
            <IconButton  size="large"
            edge="start"
            color="inherit"
            aria-label="menu"

            >
                <MenuIcon />
            </IconButton>
            
            <Typography component="div" variant='p'> <a>Home Page </a></Typography>
            <Typography component="div" variant='p'> <a>Gallery</a></Typography>
            <Typography component="div" variant='p'> <a>Online Order </a></Typography>
            <Typography component="div" variant='p'> <a>About Us </a></Typography>
            </Toolbar>
        </Container>
      <Grid container>

              <Button  variant="outlined" sx={{color:"white"}}><AccountBoxIcon /> Login | Sign in</Button> 
              
        <Button variant="outlined" sx={{color:"white"}}><input type='search' placeholder='search' /></Button>
      </Grid>
      
    </AppBar>
  )
}

export default Header
