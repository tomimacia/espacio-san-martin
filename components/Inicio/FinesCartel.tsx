import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const FinesCartel = () => {
  return (
    <Flex
      gap={5}
      border="1px solid black"
      borderRadius="10px"
      w="100%"
      flexDir="column"
      mx="auto"
      bg="purple.100"
      mb={20}
    >
      <Flex align="center" bg="blue.300" borderTopRadius="10px">
        <Heading p={1}>Plan Fines</Heading>
      </Flex>
      <Flex flexDir="column" gap={5} p={[0, 1, 2, 3]}>
        <Flex
          alignSelf="center"
          p={1}
          m={3}
          bg="whiteAlpha.600"
          borderRadius="7px"
        >
          <Text fontSize={[15, 16, 18, 20]}>
            Terminá el secundario en <strong>Espacio San Martín</strong>
          </Text>
        </Flex>
        <Button
          bg="brandLight"
          size="lg"
          alignSelf="center"
          as={Link}
          href="/Fines"
          color="white"
        >
          Inscribite
        </Button>
      </Flex>
    </Flex>
  );
};

export default FinesCartel;
