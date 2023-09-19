import useEmailJsForm from "@/hooks/emailJS";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import { useState } from "react";
import ConfirmDate from "./ConfirmDate";
import { TextAndInput } from "./Contaco/Items/TextAndInput";
import { GiPlainArrow } from "react-icons/gi";
import { motion } from "framer-motion";
type CursoFormType = {
  curso: string;
};

export const CursoForm = ({ curso }: CursoFormType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSubmit, loadingForm, form } = useEmailJsForm(() => onClose());
  const [selectedDate, setSelectedDate] = useState<DayValue | null>(null);

  const InputsData = [
    {
      name: "user_email",
      title: "Email",
      placeholder: "ejemplo@mail.com",
      type: "email",
    },
    {
      name: "user_name",
      title: "Nombre completo",
      placeholder: "Ingrese su nombre",
      type: "text",
    },
    {
      name: "user_phone",
      title: "Número de Teléfono",
      placeholder: "Ingrese su número de telefono (con el código de area)",
      type: "number",
    },
    {
      name: "DNI",
      title: "DNI",
      placeholder: "Ingrese su DNI",
      type: "number",
    },
    {
      name: "user_address",
      title: "Domicilio",
      placeholder: "Ingrese su domicilio",
      type: "text",
    },
  ];
  const fontColor = useColorModeValue("brandLight", "blue.400");
  return (
    <Flex flexDir="column" gap={20} p={5} w={["100%", "90%", "80%", "70%"]}>
      <Heading size="2xl">¿Quieres participar?</Heading>
      <Flex gap={7} p={15} flexDir="column" align="center">
        <Heading textDecor="underline" size="xl" color={fontColor}>
          Inscribite!
        </Heading>
        <motion.div
          animate={{ y: [-15, 0, -15] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Icon as={GiPlainArrow} fontSize={50} color={fontColor} />
        </motion.div>
        <Button
          onClick={onOpen}
          width="200px"
          _hover={{ bg: "blue.200" }}
          color="white"
          bg={fontColor}
        >
          Aplicar
        </Button>
      </Flex>
      <Modal
        size={["xl", "2xl", "3xl", "3xl"]}
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex={10} bg="blackAlpha.600" />
          <ModalBody>
            <Heading p={3} fontSize="3xl">
              Completa el formulario
            </Heading>
            <form ref={form} onSubmit={onSubmit}>
              <Input type="hidden" value="Cursos" name="area" />
              <Input type="hidden" value="Inscripción" name="user_asunto" />
              <Input
                type="hidden"
                value={`Curso: ${curso}`}
                name="user_curso"
              />
              <Flex p={5} flexDir="column" gap={3}>
                {InputsData.map((data) => {
                  const { name, title, placeholder, type } = data;
                  return (
                    <TextAndInput
                      key={name}
                      name={name}
                      title={title}
                      placeholder={placeholder}
                      type={type}
                    />
                  );
                })}
                <Text>Fecha de Nacimiento:</Text>
                <ConfirmDate
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
                <Button
                  type="submit"
                  value="send"
                  mx="auto"
                  w="50%"
                  fontWeight="bold"
                  size="sm"
                  maxW="200px"
                  mt={5}
                  bg={fontColor}
                  color="white"
                  isLoading={loadingForm}
                >
                  Enviar
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
