import Layout from "@/components/Layouts/Article";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Libro from "@/public/Iconos/libro.png";
import Profesor from "@/public/Iconos/profesor.png";
import Teatro from "@/public/Iconos/teatro.png";
import Barberia from "@/public/Iconos/estilista.png";
import Legal from "@/public/Iconos/legal.png";
import { motion } from "framer-motion";
type CursoType = {
  image: string;
  title: string;
  description: string;
};
type NoteType = {
  curso: CursoType;
};
const Note = ({ curso }: NoteType) => {
  const { image, title, description } = curso;
  return (
    <Flex
      cursor="pointer"
      p={2}
      gap={3}
      borderRadius="10px"
      border="1px solid gray"
      _hover={{border: "1px solid black"}}
    >
      <Image src={image} alt={title} height={60} width={60} />
      <Flex p={1} flexDir="column">
        <Heading size="sm">{title}</Heading>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  );
};
const Nosotros = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };
  const Cursos = [
    {
      image: Profesor.src,
      title: "Acompañante terapéutico",
      description: "Una descriptcion un poco mas larga",
    },
    {
      image: Barberia.src,
      title: "Barbería ",
      description: "Una descriptcion un poco mas larga",
    },
    {
      image: Libro.src,
      title: "Capacitación post escolar",
      description: "Una descriptcion un poco mas larga",
    },
    {
      image: Teatro.src,
      title: "Teatro",
      description: "Una descriptcion un poco mas larga",
    },
    {
      image: Legal.src,
      title: "Asesoría legal gratuita",
      description: "Una descriptcion un poco mas larga",
    },
    {
      image: Libro.src,
      title: "Clases de apoyo escolar ",
      description: "Una descriptcion un poco mas larga",
    },
  ];
  return (
    <Layout pageTitle="Nuestros Cursos" headTitle="Cursos">
      <Box px={7}>
        <Text fontSize={{ base: 14, sm: 20 }}>
          Explora nuestras capacitaciones en Espacio San Martín. Desde
          Acompañante Terapéutico hasta Barbería, nuestros cursos ofrecen
          oportunidades de aprendizaje variadas para impulsar tu desarrollo
          personal y profesional.{<br />}
          {<br />}
          Actualmente contamos con los siguientes <strong>cursos</strong>:
        </Text>
        <Flex py={10} flexWrap="wrap" gap={5}>
          {Cursos.map((c, ind) => {
            return (
              <motion.div
                key={c.title}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.8 + ind * 0.2,
                }}
              >
                <Note curso={c} />
              </motion.div>
            );
          })}
        </Flex>
      </Box>
    </Layout>
  );
};

export default Nosotros;
