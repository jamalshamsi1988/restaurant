import { Paper } from '@mui/material'

function Item({item})
{
    return (
     
        <Paper>
        <img src={item.image} alt="FoodPhoto" style={{width:"100%" , height:"70vh"}} />
        </Paper>
       
    )
}
export default Item;