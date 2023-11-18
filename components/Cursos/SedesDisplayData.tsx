import { CursoSede } from "@/types/types";
import { Button, Flex } from "@chakra-ui/react";
import SedeStats from "./SedeStats";

const SedesDisplayData = ({
  Sedes,
  selectedSede,
  setSelectedSede,
}: {
  Sedes: CursoSede[];
  selectedSede: CursoSede;
  setSelectedSede: (sede: CursoSede) => void;
}) => {
  return (
    <Flex flexDir="column">
      <Flex gap={3} alignSelf="center">
        {Sedes.map((sede) => {
          const { Titulo } = sede;
          return (
            <Button
              bg={selectedSede.Titulo !== Titulo ? "brandLight" : "blue.400"}
              onClick={() => setSelectedSede(sede)}
              key={Titulo}
              _hover={{ opacity: 0.7 }}
              color="white"
            >
              {Titulo}
            </Button>
          );
        })}
      </Flex>
      <SedeStats sede={selectedSede} />
    </Flex>
  );
};

export default SedesDisplayData;
