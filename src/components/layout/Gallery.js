import React from 'react'
import ImageList from '@mui/material/ImageList';
import { Card } from '@mui/material';

import gallery_pic1 from '../../assest/photos/Gallery/01.jpg';
import gallery_pic2 from '../../assest/photos/Gallery/02.jpg';
import gallery_pic3 from '../../assest/photos/Gallery/03.jpg';
import gallery_pic4 from '../../assest/photos/Gallery/04.jpg';
import gallery_pic5 from '../../assest/photos/Gallery/05.jpg';
import Header from './Header';
import Footer from './../shared/Footer';

const itemData = [
  {
    img: gallery_pic1
  },
  {
    img: gallery_pic2
  },
  {
    img:  gallery_pic3
  },
  {
    img:  gallery_pic4
    
  },
  {
    img: gallery_pic5

  }
];

const Gallery = () => {
  return (
    <>
 <Header />
    <ImageList sx={{  height:1000 }} variant="masonry"  cols={3} gap={8} >
    {itemData.map((item) => (
      <Card key={item.img}>
        <img
          src={`${item.img}`}
          alt="gallery"
        />
      </Card>
      
    ))}
  </ImageList>
 <Footer />
  </>
);
}

export default Gallery;

