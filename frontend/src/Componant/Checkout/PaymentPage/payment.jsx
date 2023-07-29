import "./Payment.css";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { BsCreditCardFill } from "react-icons/bs";

const Payment = () => {
  var money = JSON.parse(localStorage.getItem("FraazoCartamount"));
  var Total = Number(money) + 40;
  const navigate = useNavigate();
  const toast = useToast();
  const handelComfirmation = () => {
    var val = Math.floor(1000 + Math.random() * 9000);

    toast({
      title: "Successfull",
      description: `Your Order Number is ${val}`,
      status: "success",
      duration: 9000,
      position: "top",
      isClosable: true,
    });
    let cart = [];
    localStorage.setItem("FraazoCart", JSON.stringify(cart));

    navigate("/", { replace: true });
  };

  return (
    <Box id="adresspagecontainer">
      <Box id="adresspagecontainer1">
        <Box id="adresspagecontainer11">
          <Box id="adresspagecontainer111">
            <Box id="adresspagecontainer1111">
              <Text id="adress-Heading-text">Payments</Text>
              <Box id="PaymentPage1">
                <Text>Credit and Debit Card</Text>
              </Box>
            </Box>
          </Box>
          <Box id="paymentpagecontainer112">
            <FormControl id="email" color="gray">
              <FormLabel>Card Number</FormLabel>
              <InputGroup>
                <Input type="Number" variant="flushed" />
                <InputRightElement
                  children={
                    <BsCreditCardFill color="black" fontSize={"24px"} />
                  }
                />
              </InputGroup>
            </FormControl>
            <Box id="adressfillingbox1" mt={"20px"}>
              <FormControl id="email" color="gray">
                <FormLabel>Expiry (MM/YY)</FormLabel>
                <Input type="text" variant="flushed" />
              </FormControl>
              <FormControl id="email" color="gray">
                <FormLabel>CVV</FormLabel>
                <Input type="text" variant="flushed" />
              </FormControl>
            </Box>

            <FormControl id="email" marginTop={"20px"} color="gray">
              <FormLabel>Card Holders Name</FormLabel>
              <Input type="text" variant="flushed" />
            </FormControl>
          </Box>
        </Box>
        <Box id="adresspagecontainer12">
          <Text id="adress-Heading-text" marginBottom={"10px"}>
            Bill Deatails
          </Text>
          <Box id="adresspagecontainer121">
            <Box id="adresspagecontainer1211">
              <Text id="adresspagecontainer12111">Cart Ammount</Text>
              <Text id="adresspagecontainer12112">₹ {money}</Text>
            </Box>
            <Box id="adresspagecontainer1212">
              <Text id="adresspagecontainer12111">Delivery Charges</Text>
              <Text id="adresspagecontainer12112">₹ 40</Text>
            </Box>
          </Box>
          <Box id="adresspagecontainer122">
            <Box id="adresspagecontainer1221">
              <Text fontWeight={"500"}>To Pay </Text>
              <Text color={"red"} fontWeight={"500"}>
                (Saved ₹4)
              </Text>
            </Box>
            <Box id="adresspagecontainer1222">
              <Text color={"red"} fontWeight={"500"}>
                ₹{Total - 4}
              </Text>
            </Box>
          </Box>
          <Box id="adresspagecontainer123">
            <Button
              colorScheme={"teal"}
              w="339px"
              mt={"25px"}
              h="45px"
              onClick={handelComfirmation}
            >
              <Text textAlign={"right"}>Confirm order</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Payment;
