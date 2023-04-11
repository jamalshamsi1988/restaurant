import React from 'react';
import { Box, Stack ,Typography,styled} from '@mui/material';

import Food from '../photos/Header (2).jpg';


const StyledBox = styled(Box)({
    height:300 ,
    width:"100%" ,
    cursor:"pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
});

const StyledTypography = styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"red",
    opacity :"0.8",
});

const Category = () => {
  return (
    <Box>
        <Stack direction={{xs:"column" , sm:"row" }} spacing={{xs:1,sm:2,md:4}} mt={5}>
            <StyledBox sx={{backgroundImage:`url(${Food})`}} >
                <StyledTypography align='center' variant='h3'>
                        Menu
                </StyledTypography>

            </StyledBox>

            <StyledBox sx={{backgroundImage: `url(${Food})`}} >
                <StyledTypography align='center' variant='h3'>
                        Menu
                </StyledTypography>

            </StyledBox>

            <StyledBox sx={{backgroundImage: `url(${Food})`}} >
                <StyledTypography align='center' variant='h3'>
                        Menu
                </StyledTypography>

            </StyledBox>
        </Stack>
      
    </Box>
  )
}

export default Category
