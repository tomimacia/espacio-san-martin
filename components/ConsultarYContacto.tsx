import { getSingleDoc } from "@/firebase/services/getSingleDoc";
import { scrollIntoTheView } from "@/helpers/scrollIntoTheView";
import { useEnter } from "@/hooks/eventHooks/useEnter";
import {
  Button,
  Flex,
  Input,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
const ConsultarYContacto = () => {
  const [consulta, setConsulta] = useState("");
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const [registryUser, setRegistryUser] = useState<any>(null);
  const toast = useToast();
  const valueRef = useRef<HTMLInputElement | null>(null);

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  useEffect(() => {
    if (registryUser != null) {
      scrollIntoTheView("#FooterID");
      setTimeout(() => {
        setRegistryUser(null);
        setConsulta("");
      }, 15000);
    }
  }, [registryUser]);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (consulta.length < 7) {
      toast({
        title: "Error",
        description: "Ingresa un DNI válido",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setLoadingForm(true);
    await getSingleDoc("Inscriptos", consulta).then((res) => {
      console.log("fetched");
      const registry = res?.data();
      if (!registry) {
        toast({
          title: "No encontrado",
          description: "Regsitrate a alguno de nuestros cursos o contáctate!",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
        setLoadingForm(false);
      } else {
        setRegistryUser(registry);
        setLoadingForm(false);
      }
    });
  };
  return (
    <Flex gap={3} flexDir="column">
      <Text fontWeight="bold">
        Tuviste algun inconveniente con el formulario?{" "}
        {
          <Link
            as={NextLink}
            href="/Contacto"
            color={useColorModeValue("blue", "blue.200")}
            _hover={{ textDecor: "underline" }}
          >
            Contáctanos!
          </Link>
        }
      </Text>
      <Text fontWeight="bold">
        Consulta con tu DNI tus datos y a que cursos estas inscripto
      </Text>
      <Flex gap={2} w={["100%", "90%", "80%", "70%"]}>
        <Button
          type="submit"
          isLoading={loadingForm}
          size="sm"
          w="200px"
          bg="blue.400"
          onClick={onSubmit}
        >
          Consultar
        </Button>
        <Input
          borderColor="gray"
          name="consulta_DNI"
          borderRadius="5px"
          ref={valueRef}
          onKeyDown={useEnter(valueRef, onSubmit)}
          size="sm"
          type="number"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Ingresa tu dni"
        />
      </Flex>
      <AnimatePresence>
        {registryUser && (
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
          >
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>Nombre</Td>
                    <Td>{registryUser.Nombre}</Td>
                  </Tr>
                  <Tr>
                    <Td>Cursos</Td>
                    <Td>
                      {registryUser.Cursos.map((c: any) => {
                        return `${c.titulo} en Sede "${c.sede}"`;
                      }).join(", ")}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Email</Td>
                    <Td>{registryUser.Email}</Td>
                  </Tr>
                  <Tr>
                    <Td>Teléfono</Td>
                    <Td>{registryUser.Telefono}</Td>
                  </Tr>
                  <Tr>
                    <Td>Domicilio</Td>
                    <Td>{registryUser.Domicilio}</Td>
                  </Tr>
                  <Tr>
                    <Td>Nacimiento</Td>
                    <Td>{registryUser.Nacimiento}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default ConsultarYContacto;
