import React from "react";
import "./Slidder.css";

import img4 from "../../../Images/img10.png";
import img1 from "../../../Images/img7.png";
import img3 from "../../../Images/img9.png";
import img2 from "../../../Images/img8.png";
import { Box } from "@chakra-ui/react";
import ImageSlider from "../BannerCarosel/BannerCarosel";

const Slider = () => {
  return (
    <Box id="slider">
      <Box id="left-slider">
        <img src={img4} alt="slider" />
      
      </Box>
      <Box id="right-slider">
        <Box id="right-slider-1">
          <img src={img1} alt="slider" id="leftimg" />
        </Box>
        <Box id="right-slider-2">
          <img src={img2} alt="slider" id="leftimg" />
        </Box>
        <Box id="right-slider-3">
          <img src={img3} alt="slider" id="leftimg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
