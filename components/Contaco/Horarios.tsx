import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Horarios = () => {
  return (
    <Box>
      <Heading size="lg" fontWeight="medium" mb={2}>
        <CalendarIcon mr={1} /> Horarios de Atención
      </Heading>
      <Flex flexDir="column" gap={2} pt={5}>
        <Text fontFamily="montserrat">De Lunes a viernes</Text>
        <Text fontFamily="montserrat">De 10:00 HS a 18:00HS</Text>
      </Flex>
    </Box>
  );
};
