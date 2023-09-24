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
        color="white"
      >
        Open Modal
      </Icon>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={35}>
            Comparte en <strong>redes sociales</strong>!
          </ModalHeader>
          <Divider borderColor="gray" width="90%" m="auto" />
          <ModalCloseButton />
          <ModalBody my={5}>
            <RedesWrap size={50} />
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
