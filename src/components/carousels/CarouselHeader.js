import React from "react";
import Carousel from "react-material-ui-carousel";

import Image1 from "../../assest/photos/Header (1).jpg";
import Image2 from "../../assest/photos/Header (2).jpg";
import Image3 from "../../assest/photos/Header (3).jpg";
import Item from "../carousels/Item";

function CarouselHeader() {
  const items = [
    {
      id: "01",
      image: Image1,
    },
    {
      id: "02",
      image: Image2,
    },
    {
      id: "03",
      image: Image3,
    },
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </Carousel>
  );
}
export default CarouselHeader;
