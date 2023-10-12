import {
  Flex,
  Heading,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Intro from "./Intro";
import FirstSection from "./FirstSection";
const TitleIndex = () => {
  const mTop = useBreakpointValue([25, 50]);

  return (
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
  );
};

export default TitleIndex;
