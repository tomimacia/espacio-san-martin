import Layout from "@/components/Layouts/Article";
import { CursosList } from "@/data/CursosData";
import { CursoNoteType } from "@/types/types";
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
import Link from "next/link";

const Note = ({ Curso }: CursoNoteType) => {
  const { img, title, description, route } = Curso;

  return (
    <Card w="100%" border="1px solid gray">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar name={title} src={img} />
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
        <Button
          as={Link}
          href={{
            pathname: `/CursosAll`,
            query: {
              data: route,
            },
          }}
          shallow={true}
          m="auto"
          size="sm"
          bg="blue.300"
        >
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
          {CursosList.map((c, ind) => {
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
                  delay: 0.5 + ind * 0.2,
                }}
              >
                <Note Curso={c} />
              </motion.div>
            );
          })}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Nosotros;
