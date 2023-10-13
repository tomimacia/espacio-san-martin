import { CursosSedes } from "@/data/CursosData";
import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { getProducts } from "@/firebase/services/serviceProducts";
import { setSingleDoc } from "@/firebase/services/setSingleDoc";
import { updateSingleDoc } from "@/firebase/services/updateSingleDoc";
import {
  Button,
  Checkbox,
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
import ConsultarYContacto from "./ConsultarYContacto";

type CursoFormType = {
  curso: string;
};

export const CursoForm: React.FC<CursoFormType> = ({ curso }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const [yaRegistrado, setYaRegistrado] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast();
  const { sedes } = CursosSedes.find((C) => C.title === curso)!;
  const onSubmit = async (e: FormEvent) => {
    setLoadingForm(true);
    e.preventDefault();
    if (!formRef.current) return;
    const {
      user_email,
      user_name,
      user_phone,
      DNI,
      user_curso,
      user_address,
      sede,
    } = formRef.current;
    const user = {
      Email: user_email.value,
      Nombre: user_name.value,
      Telefono: user_phone.value,
      DNI: DNI.value,
      Cursos: [
        {
          titulo: user_curso.value,
          sede: sede.value,
          fechaInscripcion: new Date(),
        },
      ],
      Domicilio: user_address.value,
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
    const sameEmail = await getProducts("Inscriptos", [
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
    await getSingleDoc("Inscriptos", user.DNI).then((res) => {
      const registry = res?.data();
      if (!registry && yaRegistrado) {
        toast({
          title: `El DNI ${user.DNI} no se encuentra inscipto aún!`,
          description: "Llena el formulario nuevamente o ponte en contácto!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setLoadingForm(false);
        return;
      } else if (!registry) {
        setSingleDoc("Inscriptos", user.DNI, user)
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
      } else if (registry?.Cursos.some((c: any) => c.titulo === curso)) {
        toast({
          title: `Ya te encuentras inscripto al curso de ${curso}!`,
          description: "Cualquier inconveniente contácta con nosotros!",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
        setLoadingForm(false);
        return;
      } else {
        updateSingleDoc("Inscriptos", user.DNI, {
          Cursos: [...registry.Cursos, ...user.Cursos],
        })
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
  ];
  const fontColor = useColorModeValue("brandLight", "blue.400");

  return (
    <Flex flexDir="column" gap={5} p={[1, 2, 3, 4]}>
      <Heading size="xl">¿Querés participar?</Heading>
      <Flex
        w={["100%", "90%", "80%", "70%"]}
        gap={7}
        flexDir="column"
        align="center"
      >
        <Heading textDecor="underline" size="lg" color={fontColor}>
          Inscribite!
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
          isDisabled={curso === "Acompañante terapéutico"}
        >
          Aplicar
        </Button>
        {curso === "Acompañante terapéutico" && <Text>Inscripciones finalizadas</Text>}
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
            <Heading p={3} fontSize="3xl">
              Completa el formulario
            </Heading>
            <form ref={formRef} onSubmit={onSubmit}>
              <Input type="hidden" readOnly value="Cursos" name="area" />
              <Input type="hidden" readOnly value={curso} name="user_curso" />
              <Flex p={5} flexDir="column" gap={3}>
                <Flex gap={2}>
                  <Checkbox
                    borderColor="gray"
                    onChange={() => setYaRegistrado((prev) => !prev)}
                  />
                  <Text fontWeight="bold">
                    Ya me encuentro registrado en otros cursos
                  </Text>
                </Flex>
                <Text fontStyle="italic" fontSize={15}>
                  Si estas registrado en otro curso, solamente completá el DNI y
                  la Sede
                </Text>
                {InputsData.map((data) => {
                  const { name, title, placeholder, type } = data;
                  return (
                    <TextAndInput
                      key={name}
                      name={name}
                      title={title}
                      placeholder={placeholder}
                      type={type}
                      yaRegistrado={yaRegistrado}
                    />
                  );
                })}
                <Text>Sede:</Text>
                <Select name="sede" required>
                  {sedes?.map((sede: string) => {
                    return (
                      <option value={sede} key={sede}>
                        {sede}
                      </option>
                    );
                  })}
                </Select>

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
      <ConsultarYContacto />
    </Flex>
  );
};
