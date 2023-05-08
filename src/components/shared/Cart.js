import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <Container >
            <img />
        <Grid item>
            <Typography component="h3" variant="h3">Title</Typography>
            <Typography component="p" variant="p">Price</Typography>
        </Grid>
      <Grid item><span>Quantity</span> </Grid>
      
      <Grid className={styles.buttonContainer}> 
        {
        quantity > 1 ? <Button onClick={()=> dispatch(decrease(props.data))}>-</Button> :
         <Button onClick={()=> dispatch(removeItem(props.data))}>
        <img src={trashIcon} alt="trash"/></Button>
        }
        <button onClick={()=> dispatch(increase(props.data))}>+</button>
      </Grid>
    </Container>
  )
}

export default Cart
