import { Divider, Flex, Heading } from "@chakra-ui/react";
import { LinkPush } from "./LinkItem";

type SuperUserNavType = {
  setBody: (title: string) => void;
  body: string;
};

const SuperUserNav = ({ setBody, body }: SuperUserNavType) => {
  const routes = ["Inscripciones", "Cursos", "Noticias","Sedes"];
  return (
    <Flex flexDir="column" gap={5} mb={5}>
      <Flex id="PanelNavID" flexDir="column" gap={5}>
        <Heading>Panel de Administración</Heading>

        <Flex gap={5} p={2}>
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
