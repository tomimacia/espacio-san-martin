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
  Select,
  Switch,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { where } from "firebase/firestore";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { GiPlainArrow } from "react-icons/gi";
import { TextAndInput } from "../Contaco/Items/TextAndInput";

const FinesForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const [tenesPc, setTenesPc] = useState(false);
  const [tenesWifi, setTenesWifi] = useState(false);
  const [generoState, setGenero] = useState("");
  const [sedeState, setSede] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast();
  const onSubmit = async (e: FormEvent) => {
    setLoadingForm(true);
    e.preventDefault();
    if (!formRef.current) return;
    const {
      user_email,
      user_name,
      user_phone,
      DNI,
      CUIL,
      user_address,
      user_nacimiento,
      user_edad,
      DondeDejaste,
    } = formRef.current;
    const user = {
      Email: user_email.value,
      Nombre: user_name.value,
      Telefono: user_phone.value,
      DNI: DNI.value,
      Sede: sedeState,
      Domicilio: user_address.value,
      CUIL: CUIL.value,
      Archivado: false,
      FechaNacimiento: user_nacimiento.value,
      Edad: user_edad.value,
      FechaInscripcion: new Date(),
      TienePC: tenesPc ? "Si" : "No",
      TieneWIFI: tenesWifi ? "Si" : "No",
      Genero: generoState,
      DondeDejaste: DondeDejaste.value,
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
    if (!user.Genero) {
      toast({
        title: "Error",
        description: "Selecciona un género",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoadingForm(false);
      return;
    }
    const sameEmail = await getProducts("Fines", [
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
    await getSingleDoc("Fines", user.DNI).then((res) => {
      const registry = res?.data();
      if (!registry) {
        setSingleDoc("Fines", user.DNI, user)
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
      name: "user_edad",
      title: "Edad",
      placeholder: "Ingrese su Edad",
      type: "number",
    },
    {
      name: "user_address",
      title: "Domicilio",
      placeholder: "Calle, número, localidad...",
      type: "text",
    },
    {
      name: "CUIL",
      title: "CUIL",
      placeholder: "Ingrese su N° de CUIL",
      type: "text",
    },
    {
      name: "user_nacimiento",
      title: "Nacimiento",
      placeholder: "Formato: dia/mes/año, ejemplo: 15/09/1994",
      type: "text",
    },
  ];
  const SedesList = ["Zaizar", "Chimondegui", "Monte Grande", "Chacritas"];
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
              Plan Fines
            </Heading>
            <Heading as="h2" p={3} size="sm">
              Finaliza tus estudios!
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
                <Flex flexDir="column">
                  <Text>Sede:</Text>
                  <Select
                    size={["sm", "sm", "md"]}
                    onChange={(e) => setSede(e.target.value)}
                    placeholder="Selecciona una Sede"
                    border="1px solid gray"
                    borderRadius="7px"
                    required
                  >
                    {SedesList.map((s) => {
                      return <option key={`sede-list-${s}`}>{s}</option>;
                    })}
                  </Select>
                </Flex>
                <Flex flexDir="column">
                  <Text>Genero:</Text>
                  <Select
                    size={["sm", "sm", "md"]}
                    onChange={(e) => setGenero(e.target.value)}
                    placeholder="Selecciona un Género"
                    border="1px solid gray"
                    borderRadius="7px"
                    required
                  >
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>No binario</option>
                    <option>Trans</option>
                    <option>Otro</option>
                    <option>Prefio no decir</option>
                  </Select>
                </Flex>
                <Flex align="center">
                  <Text minW="25%">Tenes PC?:</Text>
                  <Text mx={2}>No</Text>

                  <Switch
                    colorScheme="teal"
                    isChecked={tenesPc}
                    onChange={() => setTenesPc(!tenesPc)}
                    size="md"
                  />
                  <Text mx={2}>Si</Text>
                </Flex>
                <Flex align="center">
                  <Text minW="25%">Tenes Wifi?:</Text>
                  <Text mx={2}>No</Text>

                  <Switch
                    colorScheme="teal"
                    isChecked={tenesWifi}
                    onChange={() => setTenesWifi(!tenesWifi)}
                    size="md"
                  />
                  <Text mx={2}>Si</Text>
                </Flex>
                <Flex flexDir="column">
                  <Text fontSize="lg">En donde dejaste?:</Text>
                  <Text fontSize="sm" fontStyle="italic">
                    - En que curso, escuela y año dejaste -
                  </Text>
                  <Textarea
                    size="sm"
                    borderRadius="6px"
                    borderColor="gray"
                    name="DondeDejaste"
                    placeholder="En que curso, escuela y año dejaste"
                    required
                  />
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
export default FinesForm;
