import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CursosAdmin = () => {
  return (
    <Flex flexDir="column">
      <Text fontWeight="bold">Proximamente</Text>
      {/* <Button
        w="155px"
        size="sm"
        display="inline"
        bg="brandLight"
        color="white"
        _hover={{ bg: "purple.200", color: "gray" }}
      >
        Agregar Curso <PlusSquareIcon mx={1} fontSize={20} />
      </Button> */}
    </Flex>
  );
};

export default CursosAdmin;
