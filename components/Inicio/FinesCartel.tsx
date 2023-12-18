import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const FinesCartel = () => {
  return (
    <Flex
      gap={5}
      border="1px solid black"
      borderRadius="10px"
      maxW="500px"
      flexDir="column"
      my={10}
      mx="auto"
    >
      <Flex align="center" bg="blue.300" borderTopRadius="10px">
        <Heading p={1}>Plan Fines</Heading>
      </Flex>
      <Flex flexDir="column" gap={5} p={[0, 1, 2, 3]}>
        <Text fontSize="lg">Termina el secundario en Espacio San Martín</Text>
        <Button
          bg="blue.300"
          size="sm"
          alignSelf="center"
          as={Link}
          href="/Fines"
        >
          Inscribite
        </Button>
      </Flex>
    </Flex>
  );
};

export default FinesCartel;
