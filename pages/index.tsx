import FirstSection from "@/components/Inicio/FirstSection";
import Intro from "@/components/Inicio/Intro";
import Noticias from "@/components/Inicio/Noticia";
import Layout from "@/components/Layouts/Article";
import Infancia from "@/public/infancias.jpg";
import {
  Flex,
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Home() {
  const mTop = useBreakpointValue([25, 50]);
  const Notas = [
    {
      title: "Dia de las infancias",
      img: Infancia.src,
      texto: [
        "Nueva circo social! A realizarse el dia 30/6.",
        "La reunión va a tomar lugar en el barrio de 9 de abril, y allí estaremos con diferentes actividades recreativas, una olla popular y mucho más. ",
        "Desde las 9hs hasta las 18hs vamos a estar presentes, y esperamos contar con vos!",
      ],
    },
  ];
  return (
    <Layout headTitle="Inicio">
      <Flex flexDir="column">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 2, delay: 0.2 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "tween", duration: 0.8 }}
            style={{ marginTop: mTop, padding: 12 }}
          >
            <Heading
              bg={useColorModeValue("whiteAlpha.600", "blackAlpha.500")}
              as={"h1"}
              p={3}
              ml={4}
              borderRadius="15px"
              size={["xl", "2xl"]}
              maxW="90%"
              zIndex={10}
              opacity={1}
              fontWeight="bold"
              w="fit-content"
              fontFamily="raleway"
            >
              Espacio San Martín
            </Heading>
          </motion.div>
          <Flex flexDir="column" p={1}>
            <Intro />
            <FirstSection />
          </Flex>
        </motion.div>
      </Flex>
      <Flex p={5} my={[8, 12, 16, 20]}>
        <Noticias noticias={Notas} />
      </Flex>
    </Layout>
  );
}
