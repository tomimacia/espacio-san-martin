import { Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
type NoticiaType = {
  noticia: Noticia;
};
type Noticia = {
  title: string;
  img: string;
  texto: string[];
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
  const { title, img, texto } = noticia;
  return (
    <Flex
      border="1px solid #C4C4C4"
      borderRadius="10px"
      p={5}
      gap={5}
      flexDir="column"
      bg="blackAlpha.200"
    >
      <Heading size="lg">{title}</Heading>
      <Divider py={3} />
      <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
        <Text p={5} fontSize={18}>
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
      <Button alignSelf="center" bg="blue.300" size="sm">
        Ver más
      </Button>
    </Flex>
  );
};

export default Noticias;
