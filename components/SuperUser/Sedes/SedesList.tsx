import ConfirmModal from "@/components/ConfirmModal";
import { deleteSingleDoc } from "@/firebase/services/deleteSingleDoc";
import { useCustomToast } from "@/hooks/useCustomToast";
import { SedeTypeDB } from "@/types/types";
import {
  Button,
  Divider,
  Link,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";

type SedesListType = {
  sedes: SedeTypeDB[];
  setSedes: (newNoticias: SedeTypeDB[]) => void;
};

const SedesList = ({ sedes, setSedes }: SedesListType) => {
  const { errorToast, successToast } = useCustomToast();
  const [loading, setLoading] = useState(false);
  const deleteSede = async (id: string | undefined) => {
    if (!id) {
      return errorToast("Error Inesperado");
    }
    setLoading(true);
    try {
      await deleteSingleDoc("Sedes", id);
      const newSedes = sedes.filter((n) => n.id !== id);
      setSedes(newSedes);
      successToast("Sede eliminada correctamente");
    } catch (err: any) {
      console.log("Error deleting noticia", err.message);
      errorToast("Error eliminando la noticia");
    } finally {
      setLoading(false);
    }
  };
  const fontColor = useColorModeValue("brandLight", "blue.400");

  const EliminarSedeButtonProps = {
    m: 1,
    size: "sm",
    color: "white",
    bg: fontColor,
    alignSelf: "center",
    border: "1px solid gray",
    _hover: { opacity: 0.7 },
  };
  return (
    <Flex flexDir="column">
      <Flex py={5} gap={[2, 3, 4, 5]} flexWrap="wrap">
        {sedes.map((sede) => {
          return (
            <Link
              as={NextLink}
              key={sede.Direccion}
              href={`#${sede.Titulo}`}
              scroll={false}
              fontSize={15}
              border="1px solid gray"
              borderRadius="5px"
              p={1}
              _hover={{
                color: "blue",
                border: "1px solid blue",
                fontWeight: "bold",
              }}
            >
              {sede.Titulo}
            </Link>
          );
        })}
      </Flex>
      <Flex flexDir="column" gap={5}>
        {sedes.map((sede, ind) => {
          const { Titulo, Direccion, Localidad, Iframe, id } = sede;
          return (
            <Flex
              border={"1px solid gray"}
              p={2}
              borderRadius="10px"
              flexDir="column"
              key={"Noticia" + ind}
              gap={5}
            >
              <Flex gap={2} flexDir="column">
                <Heading
                  p={3}
                  id={Titulo.replace(" ", "%20")}
                  alignSelf="center"
                >
                  {Titulo}
                </Heading>
                <Divider borderColor="gray" w="80%" mx="auto" />

                <Flex gap={3} flexDir="column">
                  <Text p={[0, 1, 2, 3]}>
                    Direccion: <strong>{Direccion}</strong>
                  </Text>
                  <Text p={[0, 1, 2, 3]}>
                    Localidad: <strong>{Localidad}</strong>
                  </Text>
                  <Flex flexDir="column" p={[0, 1, 2, 3]}>
                    <Text>Iframe:</Text>
                    <Flex w="100%">
                      <iframe
                        src={`https://www.google.com/maps/${Iframe}`}
                        style={{ border: 0, width: "100%", height: "250px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

              <Divider borderColor="gray" />
              <Flex justify="center">                
                <ConfirmModal
                  Title="Eiminar Sede"
                  buttonProps={EliminarSedeButtonProps}
                  handleClick={() => deleteSede(id)}
                  isLoading={loading}
                  ButtonText="Eliminar sede"
                >
                  <Text>
                    Estas seguro que deseas la Sede{" "}
                    <strong>{Titulo}</strong>?
                  </Text>
                </ConfirmModal>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SedesList;
