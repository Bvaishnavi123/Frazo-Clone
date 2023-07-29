import "./Cart.css";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

import img1 from "../../Images/img18.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [state, setState] = useState(true);
  var cart;
  var cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];

  let sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += +cart[i].price;
  }

  const handeldelete = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("FraazoCart", JSON.stringify(cart));
    setState(!state);
  };

  const andelNavigate = () => {
    localStorage.setItem("FraazoCartamount", JSON.stringify(sum));
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} key="sm" m={"0"} p={"10px"} size='md'>
        <div>
          <BsCart3 />
        </div>{" "}
        Cart
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart ({cart.length} Items)</DrawerHeader>
          <DrawerBody>
            {cart.length == 0 ? (
              <Box id="emptycartBox">
                <Box id="emptycartImg">
                  <img src={img1} />
                </Box>
                <Box id="emptycartText">
                  <p id="textline1">Whoops... Cart is empty</p>
                  <p id="textline2">Add some fruits, veggies and</p>
                  <p id="textline2">dairy Products to your cart</p>
                  <Button
                    onClick={onClose}
                    rounded="full"
                    mt={"20px"}
                    colorScheme="teal"
                  >
                    Let's Shop
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box id="cartbox">
                <Box
                  id="cartbox1"
                  overflow={cart.length >= 5 ? "scroll" : "hidden"}
                >
                  {cart.map((ele, index) => (
                    <Box id="compbox">
                      <Box id="imgbox1">
                        <img src={ele.image} />
                      </Box>
                      <Box id="textBox1">
                        <p id="name1">{ele.name}</p>
                        <p id="qty1">{ele.quantity}</p>
                        <p id="price1">₹{ele.price}</p>
                      </Box>
                      <Box id="buttonBox1">
                        <p
                          id="removebutton"
                          onClick={() => handeldelete(index)}
                        >
                          Remove
                        </p>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box id="cartbox2">
                  <Box id="cartBox21">
                    <p id="cartcheckouttext">{cart.length} Items</p>
                    <p id="cartcheckouttext">₹ {sum}</p>
                  </Box>
                  <Box id="cartbox22">
                    <Link to="/adress">
                      <Button
                        colorScheme={"teal"}
                        w="185px"
                        mt={"5px"}
                        h="45px"
                        onClick={andelNavigate}
                      >
                        CheckOut
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
