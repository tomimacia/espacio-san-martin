import { deleteSingleDoc } from "@/firebase/services/deleteSingleDoc";
import { DeleteUserType } from "@/types/types";
import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const DeleteUserCop = ({ username, DNI, removeUser }: DeleteUserType) => {
  const fontColor = useColorModeValue("brandLight", "blue.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const toast = useToast();

  const AnularSuscripcion = async () => {
    setLoadingForm(true);
    deleteSingleDoc("Cooperativistas", DNI)
      .then(() => {
        toast({
          title: "Usuario elimiando",
          description: `${username} dado de baja correctamente`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoadingForm(false);
        onClose();
        removeUser();
        return;
      });
  };
  return (
    <Flex>
      <motion.div whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.15 }}>
        <MdDelete onClick={onOpen} fontSize={16} cursor="pointer" />
      </motion.div>
      <Modal
        size={["xl", "2xl", "3xl", "3xl"]}
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            zIndex={10}
            _hover={{ bg: "blackAlpha.400" }}
            bg="blackAlpha.200"
          />
          <ModalBody>
            <Heading p={3} fontSize="xl">
              Anular Inscripción
            </Heading>
            <Text>
              Eliminar a <strong>{username}</strong>?
            </Text>
            <Flex p={5} flexDir="column" gap={3}>
              <Button
                type="submit"
                mx="auto"
                w="50%"
                fontWeight="bold"
                size="sm"
                maxW="200px"
                mt={5}
                bg={fontColor}
                color="white"
                border="1px solid transparent"
                _hover={{ opacity: 0.7, border: "1px solid gray" }}
                isLoading={loadingForm}
                onClick={AnularSuscripcion}
              >
                Confirmar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default DeleteUserCop;
