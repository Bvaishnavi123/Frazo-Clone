import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Fetchdata } from "../../Redux/Products/Action";
import "./Product.css";
import ProductList from "./ProductList/ProductList";
import Sidebar from "./SideBar/Sidebar";

const Product = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetchdata(query));
    window.scrollTo({
      top: 0,
    
      behavior: "smooth"
    });
  }, [dispatch, query]);

  return (
    <Box id="mainContainer">
      <Box id="Container1">
        <Sidebar />
      </Box>
      <Box id="Container2">
        <ProductList />
      </Box>
    </Box>
  );
};
export default Product;
