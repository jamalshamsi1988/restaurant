import React from "react";
import { Box } from "@mui/material";

import Image from "../assest/photos/01.jpg";

const MenuHeader = () => {
  return (
    <Box
      style={{ position: "relative" }}
      mt={10}
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "50vh",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        backgroundAttachment: "fixed",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 90,
          color: "white",
          fontWeight: 700,
          fontSize: "1.2rem",
          alignItems: "center",
        }}
      >
        Restaurant Menu
      </div>
    </Box>
  );
};

export default MenuHeader;
