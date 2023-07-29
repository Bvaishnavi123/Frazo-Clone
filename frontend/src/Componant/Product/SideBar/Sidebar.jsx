import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import "./Sidebar.css";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Sidebar = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);

  useEffect(() => {
    if (query == "coldPressed") {
      setState1(true);
    }
    if (query == "fruits") {
      setState2(true);
    }
    if (query == "vegitables") {
      setState3(true);
    }
    if (query == "dryfruits") {
      setState4(true);
    }
    if (query == "kitchenstaples") {
      setState5(true);
    }
  });

  const handelState1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    navigate("/product/coldPressed", { replace: true });
  };
  const handelState2 = () => {
    setState1(false);
    setState2(true);
    setState3(false);
    setState4(false);
    setState5(false);
    navigate("/product/fruits", { replace: true });
  };
  const handelState3 = () => {
    setState1(false);
    setState2(false);
    setState3(true);
    setState4(false);
    setState5(false);
    navigate("/product/vegitables", { replace: true });
  };
  const handelState4 = () => {
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(true);
    setState5(false);
    navigate("/product/dryfruits", { replace: true });
  };
  const handelState5 = () => {
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(true);
    navigate("/product/kitchenstaples", { replace: true });
  };
  return (
    <Box id="Sidebar1">
      <Box id={state1 ? "Sidebar22" : "Sidebar11"} onClick={handelState1}>
        {state1 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
        <p id="SidbarHead">Cold Pressed</p>
      </Box>

      <Box id={state2 ? "Sidebar22" : "Sidebar11"} onClick={handelState2}>
        {state2 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
        <p id="SidbarHead">Fruits</p>
      </Box>

      <Box id={state3 ? "Sidebar22" : "Sidebar11"} onClick={handelState3}>
        {state3 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
        <p id="SidbarHead">Vegetables</p>
      </Box>

      <Box id={state4 ? "Sidebar22" : "Sidebar11"} onClick={handelState4}>
        {state4 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
        <p id="SidbarHead">Dry Fruits</p>
      </Box>

      <Box id={state5 ? "Sidebar22" : "Sidebar11"} onClick={handelState5}>
        {state5 ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
        <p id="SidbarHead">Kitchen Staples</p>
      </Box>
    </Box>
  );
};
export default Sidebar;
