import { Button } from "@chakra-ui/react";

import { FaCartPlus } from "react-icons/fa";
import "./AddtocartButton.css";

const AddtoCartButton = ({ HandelCart, ele, cart }) => {
  let element = ele;

  return (
    <Button
      colorScheme="green"
      variant="outline"
      height={"35px"}
      id="cartbutton"
      rounded={"full"}
      onClick={() => HandelCart(element)}
    >
      <FaCartPlus />
      Add
    </Button>
  );
};

export default AddtoCartButton;
