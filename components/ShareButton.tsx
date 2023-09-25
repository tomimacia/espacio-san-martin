import {
  Button,
  Divider,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsShareFill } from "react-icons/bs";
import RedesWrap from "./Contaco/Items/RedesWrap";
const ShareButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={BsShareFill}
        onClick={onOpen}
        _hover={{ opacity: 0.7 }}
        cursor="pointer"
        fontSize={20}
        color={useColorModeValue("lightblue", "white")}
      >
        Open Modal
      </Icon>
      <Modal
        size="xs"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={25}>
            Comparte en <strong>redes sociales</strong>!
          </ModalHeader>
          <Divider borderColor="gray" width="90%" m="5px auto" />
          <ModalCloseButton />
          <ModalBody
            m={2}
            border="1px solid gray"
            borderRadius="10px"
            justifySelf="center"
            p={5}
          >
            <RedesWrap size={45} />
          </ModalBody>

          <ModalFooter>
            <Button size="sm" colorScheme="blue" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareButton;
