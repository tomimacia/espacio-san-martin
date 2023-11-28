import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { getProducts } from "@/firebase/services/serviceProducts";
import { setSingleDoc } from "@/firebase/services/setSingleDoc";
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
  Switch,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { where } from "firebase/firestore";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { GiPlainArrow } from "react-icons/gi";
import { TextAndInput } from "../Contaco/Items/TextAndInput";

const CooperativistaForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const [turnoTarde, setTurnoTarde] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast();
  const onSubmit = async (e: FormEvent) => {
    setLoadingForm(true);
    e.preventDefault();
    if (!formRef.current) return;
    const { user_email, user_name, user_phone, DNI, user_address, curso } =
      formRef.current;
    const user = {
      Email: user_email.value,
      Nombre: user_name.value,
      Telefono: user_phone.value,
      DNI: DNI.value,
      Cursos: curso.value,
      Domicilio: user_address.value,
      Archivado: false,
      FechaInscripcion: new Date(),
      Turno: turnoTarde ? "Tarde" : "Mañana",
    };
    if (user.DNI.length < 7) {
      toast({
        title: "Error",
        description: "Ingresa un DNI válido",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoadingForm(false);
      return;
    }
    const sameEmail = await getProducts("Cooperativistas", [
      where("Email", "==", user.Email),
      where("DNI", "!=", user.DNI),
    ]);
    if (sameEmail.length > 0) {
      const firstResult = sameEmail[0];
      if (firstResult && "DNI" in firstResult) {
        toast({
          title: `El email ${user.Email} ya se encuentra registrado`,
          description: `Registrado con el DNI ${firstResult.DNI}, intenta con otro email`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setLoadingForm(false);
        return;
      }
    }
    await getSingleDoc("Cooperativistas", user.DNI).then((res) => {
      const registry = res?.data();
      if (!registry) {
        setSingleDoc("Cooperativistas", user.DNI, user)
          .then(() => {
            setLoadingForm(false);
            console.log("Inscripto Satisfactoriamente!");
          })
          .finally(() => {
            onClose();
            toast({
              title: "Inscripto Satisfactoriamente!",
              description: "Nos contactaremos contigo a la brevedad",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          });
        return;
      } else if (registry) {
        toast({
          title: `Ya te encuentras registrado!`,
          description: "Cualquier inconveniente contácta con nosotros!",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
        setLoadingForm(false);
        return;
      }
    });
  };

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
      placeholder: "Calle, número, localidad...",
      type: "text",
    },
    {
      name: "curso",
      title: "Curso",
      placeholder: "Curso al que quieres inscribirte, ej: Gasista, Barbería ",
      type: "text",
    },
  ];
  const fontColor = useColorModeValue("brandLight", "blue.400");
  return (
    <Flex flexDir="column" gap={5} p={[1, 2, 3, 4]}>
      <Heading size="xl">¿Querés sumarte?</Heading>
      <Flex
        w={["100%", "90%", "80%", "70%"]}
        gap={7}
        flexDir="column"
        align="center"
      >
        <Heading textDecor="underline" size="lg" color={fontColor}>
          Adherite!
        </Heading>
        <motion.div
          animate={{ y: [-15, 0, -15] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Icon as={GiPlainArrow} fontSize={40} color={fontColor} />
        </motion.div>
        <Button
          onClick={onOpen}
          width="200px"
          _hover={{ opacity: 0.7 }}
          color="white"
          size="sm"
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
          <ModalCloseButton
            zIndex={10}
            _hover={{ bg: "blackAlpha.400" }}
            bg="blackAlpha.200"
          />
          <ModalBody>
            <Heading as="h2" p={3} size="lg">
              Adhesión Cooperativistas
            </Heading>
            <form ref={formRef} onSubmit={onSubmit}>
              <Input type="hidden" readOnly value="Cursos" name="area" />
              <Input type="hidden" readOnly value={"curso"} name="user_curso" />
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
                      yaRegistrado={false}
                    />
                  );
                })}
                <Flex align="center">
                  <Text minW="25%">Turno:</Text>
                  <Text mx={2}>Mañana</Text>

                  <Switch
                    colorScheme="teal"
                    isChecked={turnoTarde}
                    onChange={() => setTurnoTarde(!turnoTarde)}
                    size="md"
                  />
                  <Text mx={2}>Tarde</Text>
                </Flex>
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
export default CooperativistaForm;
