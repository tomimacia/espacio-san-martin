import { Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
type NoticiaType = {
  noticia: Noticia;
};
type Noticia = {
  title: string;
  img: string;
  texto: string[];
  route: string;
};
type Noticias = {
  noticias: Noticia[];
};
const Noticias = ({ noticias }: Noticias) => {
  return (
    <Flex gap={10} flexDir="column" justify="space-around">
      <Heading>Novedades</Heading>
      {noticias.map((noticia) => {
        return <Noticia key={noticia.title} noticia={noticia} />;
      })}
    </Flex>
  );
};
const Noticia = ({ noticia }: NoticiaType) => {
  const { title, img, texto, route } = noticia;
  return (
    <Flex
      border="1px solid #C4C4C4"
      borderRadius="10px"
      p={[1, 2, 3, 4]}
      flexDir="column"
      bg="blackAlpha.200"
      gap={5}
    >
      <Heading size="lg">{title}</Heading>
      <Divider  />
      <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
        <Text fontSize={18}>
          {texto.map((t) => {
            return (
              <>
                {t}
                <br />
              </>
            );
          })}
        </Text>
        <Image objectFit="contain" w={600} alt="expo" src={img} />
      </Flex>
      <Button
        as={Link}
        href={{
          pathname: `/Noticias`,
          query: {
            data: route,
          },
        }}
        alignSelf="center"
        size="xs"
        bg="blue.400"
      >
        Ver más
      </Button>
    </Flex>
  );
};

export default Noticias;
