import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <InputGroup w={"570px"} rounded={"xl"}>
        <Input
          placeholder="find Fresh vegitable frute and dairy"
          rounded={"full"}
          onChange={onOpen}
        />
        <InputRightElement children={<FaSearch color="green" />} />
      </InputGroup>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody pb={6} mt="10px">
            <FormControl>
           
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBox;
