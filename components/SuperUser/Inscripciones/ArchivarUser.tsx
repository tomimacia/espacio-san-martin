import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { updateSingleDoc } from "@/firebase/services/updateSingleDoc";
import { useCustomToast } from "@/hooks/useCustomToast";
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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAssignmentReturned } from "react-icons/md";

const ArchivarUserModal = ({
  username,
  curso,
  DNI,
  removeUser,
}: DeleteUserType) => {
  const fontColor = useColorModeValue("brandLight", "blue.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const { successToast, errorToast } = useCustomToast();
  const ArchivarUsuario = async () => {
    setLoadingForm(true);
    try {
      const userData = await getSingleDoc("Inscriptos", DNI);
      const cursosData = userData?.data()?.Cursos;
      const newCursos = cursosData.map((c: any) => {
        if (c.titulo === curso) {
          return { ...c, archivado: true };
        } else return c;
      });
      await updateSingleDoc("Inscriptos", DNI, {
        Cursos: [...newCursos],
      });
      successToast("Archivado correctamente");
      removeUser();
    } catch (err) {
      console.log("Error archivando usuario", err);
      errorToast("Error archivando usuario");
    } finally {
      onClose();
      setLoadingForm(false);
    }
  };
  return (
    <Flex>
      <motion.div whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.15 }}>
        <MdAssignmentReturned onClick={onOpen} fontSize={16} cursor="pointer" />
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
              Archivar
            </Heading>
            <Text>
              Archivar a <strong>{username}</strong> del curso de{" "}
              <strong>{curso}</strong>?
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
                onClick={ArchivarUsuario}
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

export default ArchivarUserModal;
