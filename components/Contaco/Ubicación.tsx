import useGetSedes from "@/hooks/dataHandler/useGetSedes";
import { useWaitAction } from "@/hooks/useWaitAction";
import { SedeTypeDB } from "@/types/types";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdDirectionsCarFilled, MdLocationOn } from "react-icons/md";
import { Mapa } from "./Mapa";

const Ubicación = () => {
  const [currentLocation, setCurrentLocation] = useState({
    Titulo: "Zaizar",
    Direccion: "Avenida Luis Vernet 4091",
    Localidad: "9 de Abril, Provincia de Buenos Aires",
    Iframe:
      "embed?pb=!1m18!1m12!1m3!1d3277.058130580385!2d-58.49474962504039!3d-34.77931186679146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1c4a3de5e2d%3A0x46e877202d7f9f6!2sAv.%20Luis%20Vernet%204091%2C%20B1839IIC%209%20de%20Abril%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694214172276!5m2!1sen!2sar",
  });
  const { sedes } = useGetSedes();
  const { isAvail, setIsAvail } = useWaitAction();
  const handleLocation = (sede: SedeTypeDB) => {
    if (isAvail) {
      setCurrentLocation(sede);
      setIsAvail(false);
    }
  };
  return (
    <Box>
      <Heading
        gap={1}
        alignItems="center"
        display="inline-flex"
        fontWeight="medium"
        size={"xl"}
        mb={2}
      >
        <MdDirectionsCarFilled /> Cómo llegar
      </Heading>

      <Flex flexDir="column" gap={7} pt={5}>
        <Flex flexDir="column" gap={2}>
          <Heading
            alignItems="center"
            mb={2}
            gap={1}
            size="lg"
            display="inline-flex"
            fontWeight="medium"
          >
            <MdLocationOn />
            Nuestras sedes
          </Heading>

          {sedes.length > 0 && (
            <Flex gap={[1, 2, 4, 6]} flexWrap="wrap">
              {sedes?.map((sede) => {
                return (
                  <Button
                    key={sede.Titulo}
                    onClick={() => handleLocation(sede)}
                    size="sm"
                    bg="brandLight"
                    color="white"
                    _hover={{ opacity: 0.8 }}
                  >
                    <Text fontFamily="montserrat">{sede.Titulo}</Text>
                  </Button>
                );
              })}
            </Flex>
          )}
        </Flex>

        <Mapa location={currentLocation} />
      </Flex>
    </Box>
  );
};

export default Ubicación;
