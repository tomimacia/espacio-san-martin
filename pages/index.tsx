import Layout from "@/components/Layouts/Article";
import Intro from "@/components/Inicio/Intro";
import JuanHD from "@/public/JuanHD.jpg";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FirstSection from "@/components/Inicio/FirstSection";
export default function Home() {
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
            style={{ marginTop: 50, padding: 12 }}
          >
            <Heading
              bg={useColorModeValue("whiteAlpha.600", "blackAlpha.500")}
              as={"h1"}
              p={2}
              ml={4}
              borderRadius="15px"
              size={["xl", "2xl"]}
              maxW="90%"
              zIndex={10}
              opacity={1}
              fontWeight="bold"
              w="fit-content"
            >
              Espacio San Martín
            </Heading>
          </motion.div>
          <Intro />
        </motion.div>
      </Flex>

      <FirstSection />
    </Layout>
  );
}
