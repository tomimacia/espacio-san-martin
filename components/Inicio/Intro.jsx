import {
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import JuanHD from "@/public/JuanHD.jpg";
import { motion } from "framer-motion";
const Intro = () => {
  const title = "Tu destino para el crecimiento personal y profesional";
  const gradientColor = useColorModeValue("brandLight", "brandDark");
  return (
    <Flex
      gap={{ base: 7, md: 0 }}
      flexDir={{ base: "column", md: "row" }}
      h="100%"
    >
      <Flex
        opacity={1}
        borderRadius="65px 0 100px 0"
        bgGradient={`linear(to-b,${gradientColor},#${useColorModeValue(
          "FFFFFF",
          "1A202C"
        )})`}
        w={{ base: "100%", md: "50%" }}
      >
        <Flex p={[5, 6, 8, 10]} mt="5%" gap={[3, 6, 8, 10]} flexDir="column">
          <Heading as={"h1"} fontWeight={700} fontSize={[23, 28, 33, 38]}>
            {title.split(" ").map((word, ind) => {
              return (
                <motion.span
                  key={ind}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * ind, duration: 1 }}
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          </Heading>
          <Divider borderColor="gray.500" />
          <Text fontWeight="medium" fontSize={{ base: "md", sm: "md" }}>
            Descubre un espacio de oportunidades donde la educación y el
            bienestar se unen para guiarte hacia un futuro más brillante y
            satisfactorio!
          </Text>
        </Flex>
      </Flex>

      <Flex w={{ base: "100%", md: "50%" }}>
        <Image
          alt="casa"
          objectPosition="center"
          borderRadius="0 0 10px 10px"
          objectFit="cover"
          src={JuanHD.src}
        />
      </Flex>
    </Flex>
  );
};

export default Intro;
