import "./Login.css";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  InputGroup,
  Text,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthContext } from "../../Context/AuthContext";
import jwt_decode from "jwt-decode";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, SetLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [regfirstName, setRegFirstName] = useState("");
  const [reglastName, setRegLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regpassword, setRegPassword] = useState("");

  const { loginAuth, handelUser } = useContext(AuthContext);
  function handleCallbackResponse(res){
    
    // var userID = jwt_decode(res.credential);
    // setUserName(userID.name)
    // dispatch(isAuth(true));
    // navigate('/')
}
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1018777173719-po881ts69fnll531n7v5ksti1g22v10t.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
    });
  }, []);

  const handelRegister = () => {
    axios({
      url: "https://fraazomasaiapi.herokuapp.com/api/signup",
      method: "POST",
      data: {
        firstname: regfirstName,
        lastname: reglastName,
        email: regEmail,
        password: regpassword,
      },
    })
      .then((res) => {
        toast({
          title: "Account created.",
          position: "top",
          description: res.data.message,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        SetLogin(!login);
      })
      .catch((err) => {
        let a = err.response.data.error
          ? err.response.data.error
          : err.response.data.message;

        console.log(err);
        toast({
          title: "Error",
          position: "top",
          description: a,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
    setRegFirstName("");
    setRegLastName("");
    setRegEmail("");
    setRegPassword("");
  };

  const [logEmail, setlogEmail] = useState("");
  const [logpassword, setLogPassword] = useState("");

  const handelLogin = () => {
    axios({
      url: "https://fraazomasaiapi.herokuapp.com/api/signin",
      method: "POST",
      data: {
        email: logEmail,
        password: logpassword,
      },
    })
      .then((res) => {
        console.log(res);
        toast({
          title: "Login Successfull",
          position: "top",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        loginAuth(res.data.token);
        handelUser(res.data.user.firstname);
        onClose();
      })
      .catch((err) => {
        toast({
          title: "Error",
          position: "top",
          description: err.response.data.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
    setlogEmail("");
    setLogPassword("");
  };

  function handleCallbackResponse(res) {
    var userID = jwt_decode(res.credential);
    // setUserName(userID.name)
    // dispatch(isAuth(true));
    // navigate('/')
  }

  return (
    <>
      <Button onClick={onOpen} id="mainid" m={"0"} p="10px" size="md">
        <div>
          <FaUserAlt />
        </div>{" "}
        Login
      </Button>

      {login ? (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader as={"h2"} id="head1">
              WelCome to Fraazo!
            </ModalHeader>
            <ModalHeader as={"h6"} id="head2">
              Sign In to track your Order and More.
            </ModalHeader>

            <ModalCloseButton />
            <Box
              rounded={"lg"}
              boxShadow={"lg"}
              p={8}
              marginTop="0"
              paddingTop={"0"}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    variant="flushed"
                    value={logEmail}
                    onChange={(e) => setlogEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    variant="flushed"
                    value={logpassword}
                    onChange={(e) => setLogPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"teal"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    color={"white"}
                    onClick={handelLogin}
                    colorScheme="teal"
                  >
                    Sign in
                  </Button>
                  <div id="google">
                    <div style={{ color: "grey" }}>or connect via</div>
                    <div id="signInDiv" style={{ marginLeft: "5px" }}></div>
                  </div>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    New user?{" "}
                    <Link color={"teal"} onClick={() => SetLogin(!login)}>
                      Register
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </ModalContent>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader as={"h2"} id="head1">
              WelCome to Fraazo!
            </ModalHeader>
            <ModalHeader as={"h6"} id="head2">
              New user? Sign up.
            </ModalHeader>
            <ModalCloseButton />
            <Box
              rounded={"lg"}
              boxShadow={"lg"}
              p={8}
              marginTop="0"
              paddingTop={"0"}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        variant="flushed"
                        value={regfirstName}
                        onChange={(e) => setRegFirstName(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        variant="flushed"
                        value={reglastName}
                        onChange={(e) => setRegLastName(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    variant="flushed"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      variant="flushed"
                      value={regpassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    colorScheme="teal"
                    loadingText="Submitting"
                    size="lg"
                    color={"white"}
                    onClick={handelRegister}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"teal"} onClick={() => SetLogin(!login)}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default Login;
