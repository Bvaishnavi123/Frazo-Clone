import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Radio,
  RadioGroup,
  Center,
} from "@chakra-ui/react";
import "./Address.css";
import { Link } from "react-router-dom";

const Address = () => {
  var money = JSON.parse(localStorage.getItem("FraazoCartamount"));
  var Total = Number(money) + 40;
  return (
    <Box id="adresspagecontainer">
      <Box id="adresspagecontainer1">
        <Box id="adresspagecontainer11">
          <Box id="adresspagecontainer111">
            <RadioGroup>
              <Box id="adresspagecontainer1111">
                <Text id="adress-Heading-text">Address Type</Text>
                <Radio value="1" size="lg" mt={"10px"} colorScheme="teal">
                  Home
                </Radio>
                <Radio value="2" size="lg" mt={"10px"} colorScheme="teal">
                  Office
                </Radio>
              </Box>
            </RadioGroup>
          </Box>
          <Box id="adresspagecontainer112">
            <Text id="adress-Heading-text">Add new Adress</Text>
            <Box id="adressfillingbox1">
              <FormControl id="email" isRequired>
                <FormLabel>Flat Number</FormLabel>
                <Input
                  type="text"
                  variant="flushed"
                  placeholder="Flat Number"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Building Name</FormLabel>
                <Input
                  type="text"
                  variant="flushed"
                  placeholder="Building Name"
                />
              </FormControl>
            </Box>
            <Box id="adressfillingbox2">
              <FormControl id="email" isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text" variant="flushed" placeholder="Address" />
              </FormControl>
              <FormControl id="email" marginTop={"20px"}>
                <FormLabel>How to Reach</FormLabel>
                <Input
                  type="text"
                  variant="flushed"
                  placeholder="How to Reach"
                />
              </FormControl>
            </Box>
            <Box id="adressfillingbox3">
              <FormControl id="email" isRequired>
                <FormLabel>City</FormLabel>
                <Input type="text" variant="flushed" placeholder="City" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Pin Code</FormLabel>
                <Input type="text" variant="flushed" placeholder="Pin Code" />
              </FormControl>
            </Box>
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
            <Link to="/payment">
              <Button colorScheme={"teal"} w="339px" mt={"25px"} h="45px">
                <Text textAlign={"right"}>Select Payment Method</Text>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Address;
