import { Box } from "@chakra-ui/react";
import { BestDealCarasol } from "./Carasol/BestDeals";
import { DryfruiteCarasol } from "./Carasol/dryfruits";
import { FruiteCarasol } from "./Carasol/FruitsCarosel";
import { StaplesCarasol } from "./Carasol/Staples";
import { VegitableCarasol } from "./Carasol/vegitableCarosel";
import ProductCategory from "./ProductCategory/ProductCategory";
import Slider from "./Slidder/Slidder";
import "./Home.css";
import { ColdPressedCarosel } from "./Carasol/ColdPressedCarosel";

const Home = () => {
  return (
    <>
      <Slider />
      <ProductCategory />
      <Box id="headingbox">
        <p id="headingboxText">BEST DEALS</p>
      </Box>
      <BestDealCarasol />
      <Box id="headingbox">
        <p id="headingboxText">COLD PRESSED</p>
      </Box>
      <ColdPressedCarosel />
      <Box id="headingbox">
        <p id="headingboxText">FRUITS</p>
      </Box>
      <FruiteCarasol />
      <Box id="headingbox">
        <p id="headingboxText">VEGITABLES</p>
      </Box>
      <VegitableCarasol />
      <Box id="headingbox">
        <p id="headingboxText">DRYFRUITS</p>
      </Box>
      <DryfruiteCarasol />
      {/* <Box id="headingbox">
        <p id="headingboxText">KITCHEN STAPLES</p>
      </Box>
      <StaplesCarasol /> */}
    </>
  );
};

export default Home;
