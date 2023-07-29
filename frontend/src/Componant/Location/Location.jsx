import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
// import "Location.css";
import { ImLocation } from "react-icons/im";
import { LocationContext } from "../../Context/locationContext";
const Location = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState();
  const [isLocation, issetLocation] = useState(false);
  const { locationContext, setLocationContext } = useContext(LocationContext);

  const setlocationurl = () => {
    issetLocation(true);
    setUrl(
      `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );
    setLocationContext(location);
  };
  
 
  return (
    <>
      <Button onClick={onOpen} size="md" maxWidth={"120px"} minWidth={"120px"}>
        {" "}
        <ImLocation />
        {locationContext == "" ? "Location" : locationContext.slice(0, 12)}
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size="sm" placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Location</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <iframe
                  width="400px"
                  id="gmap_canvas"
                  src={
                    isLocation
                      ? url
                      : "https://maps.google.com/maps?q=dehli&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  }
                ></iframe>
              </Box>

              <Box></Box>

              <Box></Box>

              <Box>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Set Location"
                  variant="flushed"
                  width="400px"
                  mb={"30px"}
                />
                <Button
                  onClick={() => setlocationurl()}
                  id="setlocationButton"
                  colorScheme="teal"
                  width={"400px"}
                  color={"white"}
                >
                  Set Location
                </Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Location;
