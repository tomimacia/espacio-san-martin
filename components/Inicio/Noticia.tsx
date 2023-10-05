import { Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import Infancia from "@/public/infancias.jpg";
import CamionerosLogo from "@/public/CamionerosLogo.png";
type NoticiaType = {
  noticia: Noticia;
};
type Noticia = {
  title: string;
  img: string;
  texto: string[];
  route: string;
};
const Noticias = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const noticias = [
    {
      title: "Nueva Sede de Espacio San Martín",
      img: CamionerosLogo.src,
      texto: [
        "Hoy celebramos la apertura de la nueva sede de ESPACIO SAN MARTIN en el predio de Ruta 4.",
        "Este emocionante encuentro representa una colaboración significativa con el Club Camioneros y marca un paso importante hacia un futuro comunitario más sólido y unido.",
      ],
      route: "Camioneros",
    },
    {
      title:
        "Compromiso Solidario: Olla Popular en el Espacio San Martín todos los Viernes",
      img: Infancia.src,
      texto: [
        "El Espacio San Martín del Zaizar se enorgullece en presentar la 'Olla Popular' todos los viernes a las 12:30 p.m. en la Avenida Luis Vernet 4091.",
        "Este gesto solidario brinda comidas nutritivas en un ambiente de comunidad.",
        "Únete y comparte el espíritu de solidaridad.",
      ],
      route: "Olla",
    },
  ];
  return (
    <Flex ref={ref} gap={10} flexDir="column" justify="space-around">
      <Heading as="h3">Novedades</Heading>
      {noticias.map((noticia, ind) => {
        return (
          <motion.div
            initial="hidden"
            key={noticia.title}
            animate={inView ? "visible" : ""}
            variants={variants}
            transition={{ duration: 2, delay: ind / 4 }}
          >
            <Noticia noticia={noticia} />
          </motion.div>
        );
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
      gap={3}
    >
      <Heading p={1} size="lg">
        {title}
      </Heading>
      <Divider />
      <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
        <Text fontSize={18}>
          {texto.map((t, ind) => {
            return (
              <Fragment key={ind + "texto"}>
                {t}
                <br />
              </Fragment>
            );
          })}
        </Text>
        <Image objectFit="contain" w={300} h={300} alt={title} src={img} />
      </Flex>
      <Button
        as={Link}
        href={{
          pathname: `/Noticias`,
          query: {
            data: route,
          },
        }}
        shallow={true}
        alignSelf="center"
        size="sm"
        bg="blue.400"
      >
        Ver más
      </Button>
    </Flex>
  );
};

export default Noticias;
