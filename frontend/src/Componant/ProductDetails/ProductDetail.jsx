import { Box, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FetchOnedata } from "../../Redux/ProductDetails/Action";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { query, productname, id } = useParams();
  const toast = useToast();
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchOnedata(query, id));
    window.scrollTo({
      top: 0,
    
      behavior: "smooth"
    });
  }, [dispatch, query]);

  const Oneproducts =  JSON.parse(localStorage.getItem('oneProduct'))
console.log(Oneproducts,'--------------')

  const HandelCart = (ele) => {
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

  return (
    <Box id="ProdctDetailsBox1">
      <Box id="ProdctDetailsBox11">
        <img src={Oneproducts.image}></img>
      </Box>

      <Box id="ProdctDetailsBox12">
        <Box id="textBox">
          <p id="namedetails">{Oneproducts.name}</p>

          <p id="qtydetails">{Oneproducts.quantity}</p>
          <p id="pricedetails">₹{Oneproducts.price}</p>

          <Button
            colorScheme="green"
            variant="outline"
            width={"90px"}
            height={"35px"}
            id="cartbutton"
            rounded={"full"}
            onClick={() => HandelCart(Oneproducts)}
          >
            <FaCartPlus />
            Add
          </Button>
        </Box>
        <Box id="bottomofdetails">
          <Button
            colorScheme={state1 ? "green" : "black"}
            variant={state1 ? "outline" : ""}
            width={"140px"}
            height={"35px"}
            id="cartbutton"
            onClick={() => {
              setState1(true);
              setState2(false);
              setState3(false);
            }}
          >
            Description
          </Button>
          <Button
            colorScheme={state2 ? "green" : "black"}
            variant={state2 ? "outline" : ""}
            width={"140px"}
            height={"35px"}
            id="cartbutton"
            onClick={() => {
              setState1(false);
              setState2(true);
              setState3(false);
            }}
          >
            Benefits
          </Button>
          <Button
            colorScheme={state3 ? "green" : "black"}
            variant={state3 ? "outline" : ""}
            width={"140px"}
            height={"35px"}
            id="cartbutton"
            onClick={() => {
              setState1(false);
              setState2(false);
              setState3(true);
            }}
          >
            Info
          </Button>
        </Box>
        <Box id="textDescriptiondetails">
          {state1&&<p>{Oneproducts.name}</p>}
          {state2&&<p>No Details Available</p>}
         {state3&& <p>
           
            The item images shown are representation purpose only. The actual
            item may vary as per harvest, season and availability.
          </p>}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
