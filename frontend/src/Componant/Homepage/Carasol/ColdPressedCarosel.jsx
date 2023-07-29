import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carosel.css";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { coldPressed } from "../../../Constant/data";

export const ColdPressedCarosel = () => {
  const toast = useToast();
  // const [mangoes, setmangoes] = useState([]);

  useEffect(() => {
    // axios({
    //   url: `https://fraazomasaiapi.herokuapp.com/api/mangos`,
    //   method: "GET",
    // })
    //   .then((res) => {
    //     setmangoes(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  const HandelCart = (ele) => {
    console.log(ele);
    toast({
      title: "Successfull",
      description: `${ele.name} Added to the cart`,
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
    const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
    cart.push(ele);
    localStorage.setItem("FraazoCart", JSON.stringify(cart));
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  var query="mangos"
  return (
    <div style={{ display: "flex", textAlign: "center", marginTop: "5px" }}>
      <div
        style={{
          width: "86%",
          margin: "auto",
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={50000}
        >
          {coldPressed?.map((ele) => (
            <Box id="carosel11">
              <Link to={`/product/${query}/${ele.name}/${ele._id}`}>
                <Box id="imgbox">
                  <img src={ele.image} />
                </Box>
              </Link>
              <Box id="textBox">
                <p id="name">
                  {ele.name.slice(0, 26)}
                  {ele.name.length > 26 && "..."}
                </p>
                <Box id="lowerbox">
                  <Box id="leftbox">
                    <p id="qty">{ele.quantity}</p>
                    <p id="price">₹{ele.price}</p>
                  </Box>
                  <Box id="rightbox">
                    <Button
                      colorScheme="green"
                      variant="outline"
                      height={"35px"}
                      id="cartbutton"
                      rounded={"full"}
                      onClick={() => HandelCart(ele)}
                    >
                      <FaCartPlus />
                      Add
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
