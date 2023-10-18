import ConsultarYContacto from "@/components/Cursos/ConsultarYContacto";
import CursoNote from "@/components/Cursos/CursoNote";
import Layout from "@/components/Layouts/Article";
import useGetCursos from "@/hooks/dataHandler/useGetCursos";
import ReactLoading from "react-loading";

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
  const { cursos, loadingCursos } = useGetCursos();

  return (
    <Layout pageTitle="Nuestros Cursos" headTitle="Cursos">
      <Flex flexDir="column" mx={[1, 2, 5, 7]}>
        <Text fontSize={{ base: 14, sm: 20 }}>
          Explora nuestras capacitaciones en Espacio San Martín. Desde
          Acompañante Terapéutico hasta Barbería, nuestros cursos ofrecen
          oportunidades de aprendizaje variadas para impulsar tu desarrollo
          personal y profesional.{<br />}
          {<br />}
          Actualmente contamos con los siguientes <strong>cursos</strong>:
        </Text>
        <Flex p={4} mt={5} gap={3} flexWrap="wrap">
          {loadingCursos && (
            <ReactLoading type="bars" color="white" height="50%" width="50%" />
          )}
          {!loadingCursos &&
            cursos.map((c, ind) => {
              return (
                <motion.div
                  key={c.Card.CardTitle}
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
                  <CursoNote Curso={c.Card} id={c.id} />
                </motion.div>
              );
            })}
        </Flex>
        <Flex p={5}>
          <ConsultarYContacto />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Nosotros;
