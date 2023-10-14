import React from "react";
import "./ProductCategory.css";
import img1 from "../../../Images/img2.png";
import img2 from "../../../Images/img3.png";
import img3 from "../../../Images/img4.png";
import img5 from "../../../Images/img5.png";
import img6 from "../../../Images/img6.png";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const ProductCategory = () => {
  return (
    <Box id="MainContainer">
      <Link to="/product/coldPressed">
        <Box id="Container11">
          <img src={img1} alt="img" />
        </Box>
      </Link>
      <Link to="/product/fruits">
        <Box id="Container11">
          <img src={img2} alt="img" />
        </Box>
      </Link>
      <Link to="/product/vegitables">
        <Box id="Container11">
          <img src={img3} alt="img" />
        </Box>{" "}
      </Link>
      <Link to="/product/dryfruits">
        <Box id="Container11">
          <img src={img5} alt="img" />
        </Box>{" "}
      </Link>
      <Link to="/product/kitchenstaples">
        <Box id="Container11">
          <img src={img6} alt="img" />
        </Box>{" "}
      </Link>
    </Box>
  );
};

export default ProductCategory;
