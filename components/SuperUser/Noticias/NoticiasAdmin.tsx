import useGetNoticias from "@/hooks/useGetNoticias";
import { Divider, Flex, Progress, Text } from "@chakra-ui/react";
import NoticiaAddForm from "./NoticiaAddForm";
import NoticiasList from "./NoticiasList";

const NoticiasAdmin = () => {
  const { noticias, setNoticias, getNoticias, loadingNoticias } =
    useGetNoticias();

  return (
    <Flex flexDir="column">
      <Flex flexDir="column" gap={3}>
        {loadingNoticias && (
          <Progress
            h={2}
            colorScheme="purple"
            bg="transparent"
            w="100%"
            isIndeterminate
            zIndex={100}
          />
        )}
        {!loadingNoticias &&
          (noticias.length > 0 ? (
            <NoticiasList noticias={noticias} setNoticias={setNoticias} />
          ) : (
            <Text fontWeight="bold">No hay noticias para mostrar</Text>
          ))}
      </Flex>
      <Divider borderColor="gray.400" my={6} />
      <NoticiaAddForm getNoticias={getNoticias} />
    </Flex>
  );
};

export default NoticiasAdmin;
