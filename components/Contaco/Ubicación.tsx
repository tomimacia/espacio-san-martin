import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdDirectionsCarFilled, MdLocationOn } from "react-icons/md";
import { Mapa } from "./Mapa";
const Ubicación = () => {
  return (
    <Box>
      <Heading size={"xl"} mb={2}>
        Ubicación
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
            Dónde nos encontramos
          </Heading>
          <Text fontFamily="montserrat">H. Yrigoyen 8381, 1A, 1832</Text>
          <Text fontFamily="montserrat">Lomas de Zamora - Buenos Aires</Text>
        </Flex>
        <Flex flexDir="column">
          <Heading
            mb={6}
            gap={1}
            alignItems="center"
            display="inline-flex"
            fontWeight="medium"
            size="lg"
          >
            <MdDirectionsCarFilled /> Cómo llegar
          </Heading>
          <Mapa />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Ubicación;
