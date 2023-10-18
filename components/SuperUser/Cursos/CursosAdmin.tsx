import useGetCursos from "@/hooks/dataHandler/useGetCursos";
import { Divider, Flex, Progress, Text } from "@chakra-ui/react";
import CursosAddForm from "./CursosAddForm";
import CursosList from "./CursosList";

const CursosAdmin = () => {
  const CursosHook = useGetCursos();
  const { cursos, setCursos, getCursos, loadingCursos } = CursosHook;
  return (
    <Flex flexDir="column">
      <Flex flexDir="column" gap={3}>
        {loadingCursos && (
          <Progress
            h={2}
            colorScheme="purple"
            bg="transparent"
            w="100%"
            isIndeterminate
            zIndex={100}
          />
        )}
        {!loadingCursos &&
          (cursos.length > 0 ? (
            <CursosList CursosHook={CursosHook} />
          ) : (
            <Text fontWeight="bold">No hay noticias para mostrar</Text>
          ))}
      </Flex>
      <Divider borderColor="gray.400" my={6} />
      <CursosAddForm getCursos={getCursos} />
    </Flex>
  );
};

export default CursosAdmin;
