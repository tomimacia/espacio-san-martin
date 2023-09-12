import Layout from "@/components/Layouts/Article";
import Barberia from "@/public/Iconos/estilista.png";
import Legal from "@/public/Iconos/legal.png";
import Libro from "@/public/Iconos/libro.png";
import Profesor from "@/public/Iconos/profesor.png";
import Teatro from "@/public/Iconos/teatro.png";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
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
    <Card w="100%" border="1px solid gray">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar name={title} src={image} />
            <Box>
              <Heading size="sm">{title}</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Button m="auto" size="sm" bg="blue.300">
          Ver mas
        </Button>
      </CardFooter>
    </Card>
  );
};
const Nosotros = () => {
  const noteSize = useBreakpointValue(["100%", "100%", "48%", "48%"]);
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
      description:
        "Formación en Acompañamiento Terapéutico: Apoyando a Pacientes y Familias",
    },
    {
      image: Barberia.src,
      title: "Barbería ",
      description: "Domina el arte de la barbería con nosotros",
    },
    {
      image: Libro.src,
      title: "Capacitación post escolar",
      description: "Prepárate para el éxito en tu carrera profesional",
    },
    {
      image: Teatro.src,
      title: "Teatro",
      description: "Explora tu talento en el escenario",
    },
    {
      image: Legal.src,
      title: "Asesoría legal gratuita",
      description:
        "Resuelve problemas legales con asesoramiento profesional gratuito",
    },
    {
      image: Libro.src,
      title: "Clases de apoyo escolar ",
      description: "Mejora tu rendimiento con nuestras clases de apoyo escolar",
    },
  ];
  return (
    <Layout pageTitle="Nuestros Cursos" headTitle="Cursos">
      <Flex flexDir="column" mx={7}>
        <Text fontSize={{ base: 14, sm: 20 }}>
          Explora nuestras capacitaciones en Espacio San Martín. Desde
          Acompañante Terapéutico hasta Barbería, nuestros cursos ofrecen
          oportunidades de aprendizaje variadas para impulsar tu desarrollo
          personal y profesional.{<br />}
          {<br />}
          Actualmente contamos con los siguientes <strong>cursos</strong>:
        </Text>
        <Flex p={4} mt={5} gap={3} flexWrap="wrap">
          {Cursos.map((c, ind) => {
            return (
              <motion.div
                key={c.title}
                style={{ display: "flex", width: noteSize }}
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
      </Flex>
    </Layout>
  );
};

export default Nosotros;
