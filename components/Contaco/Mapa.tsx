import { AspectRatio, Flex, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
type locationType = {
  sede: string;
  direccion: string;
  localidad: string;
  iframe: string;
};
type mapaType = {
  location: locationType;
};
export const Mapa = ({ location }: mapaType) => {
  const { sede, direccion, localidad, iframe } = location;
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
        key={sede}
      >
        <Flex flexDir="column">
          <Heading size="lg">Sede {sede}</Heading>
          <Flex flexDir="column" gap={2} p={2}>
            <Text fontFamily="montserrat">{direccion}</Text>
            <Text fontFamily="montserrat">{localidad}</Text>
          </Flex>
          <AspectRatio w={["100%", "90%", "80%", "70%"]} ratio={16 / 9}>
            <iframe
              src={`https://www.google.com/maps/${iframe}`}
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};
