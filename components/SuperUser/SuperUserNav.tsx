import { Divider, Flex, Heading } from "@chakra-ui/react";
import { LinkPush } from "./LinkItem";

type SuperUserNavType = {
  setBody: (title: string) => void;
  body: string;
};

const SuperUserNav = ({ setBody, body }: SuperUserNavType) => {
  const routes = ["Inscripciones", "Cursos", "Noticias", "Sedes", "Coope"];
  return (
    <Flex flexDir="column" gap={5} mb={5}>
      <Flex w="100%" id="PanelNavID" flexDir="column" gap={5}>
        <Heading>Panel de Administración</Heading>
        <Flex
          gap={[1, 2, 3, 4]}
          placeContent="center"
          justify="space-around"
          flexWrap="wrap"
          p={[0, 1, 2, 3]}
        >
          {routes.map((r) => {
            return (
              <LinkPush
                key={r}
                onClick={() => setBody(r)}
                active={body === r}
                title={r}
              />
            );
          })}
        </Flex>
      </Flex>
      <Divider borderColor="gray" w="100%" />
    </Flex>
  );
};

export default SuperUserNav;
