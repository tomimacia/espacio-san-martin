import { mapaType } from "@/types/types";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export const Mapa = ({ location }: mapaType) => {
  const { Titulo, Direccion, Localidad, Iframe } = location;
  const variants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 10,
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ type: "tween", duration: 0.5 }}
        key={Titulo}
      >
        <Flex flexDir="column">
          <Heading size="lg">Sede {Titulo}</Heading>
          <Flex flexDir="column" gap={2} p={2}>
            <Text fontWeight="bold" fontFamily="montserrat">
              {Direccion}
            </Text>
            <Text fontWeight="bold" fontFamily="montserrat">
              {Localidad}
            </Text>
          </Flex>
          <Flex w="100%">
            <iframe
              src={`https://www.google.com/maps/${Iframe}`}
              style={{ border: 0, height: "250px", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Flex>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};
