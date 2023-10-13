import useGetSedes from "@/hooks/dataHandler/useGetSedes";
import { Divider, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import SedesList from "./SedesList";
import SedeAddForm from "./SedeAddForm";
const SedesAdmin = () => {
  const { loadingSedes, setSedes, getSedes, sedes } = useGetSedes();

  return (
    <Flex flexDir="column">
      <Flex flexDir="column" gap={3}>
        {loadingSedes && (
          <Progress
            h={2}
            colorScheme="purple"
            bg="transparent"
            w="100%"
            isIndeterminate
            zIndex={100}
          />
        )}
        {!loadingSedes &&
          (sedes.length > 0 ? (
            <SedesList sedes={sedes} setSedes={setSedes} />
          ) : (
            <Text fontWeight="bold">No hay noticias para mostrar</Text>
          ))}
      </Flex>
      <Divider borderColor="gray.400" my={6} />
      <SedeAddForm getSedes={getSedes} />
    </Flex>
  );
};

export default SedesAdmin;
