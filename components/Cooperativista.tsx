import { Icon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ImArrowDown, ImArrowRight } from "react-icons/im";
const Cooperativista = () => {
  const breakPointRef = useBreakpointValue([1, 1, 2, 2]);
  return (
    <Flex bg="blue.200" flexDir="column" borderRadius="10px" mb={20}>
      <Heading p={5} size={["md", "lg", "lg", "xl"]} fontWeight="normal">
        Nueva iniciativa para <strong>COOPERATIVISTAS</strong>!
      </Heading>
      <Flex borderRadius="5px" bg="blue.100" flexDir="column">
        <Flex
          flexDir={["column", "column", "row", "row"]}
          my={10}
          justify="space-around"
          align="center"
        >
          <Heading
            size={["lg", "lg", "xl", "xl"]}
            bg="blackAlpha.300"
            p={1}
            borderRadius="8px"
          >
            Sos cooperativista?
          </Heading>
          {breakPointRef === 2 && (
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Icon as={ImArrowRight} fontSize={80} color="brandLight" />
            </motion.div>
          )}
          {breakPointRef === 1 && (
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Icon as={ImArrowDown} m={5} fontSize={60} color="brandLight" />
            </motion.div>
          )}
          <Button
            as={Link}
            href="/Cooperativistas"
            _hover={{ opacity: 0.5 }}
            fontSize={[20, 25, 25, 30]}
            p={[3, 4, 5, 6]}
            bg="brandLight"
            color="white"
          >
            Unite!
          </Button>
        </Flex>
        <Flex
          alignSelf="center"
          p={1}
          m={3}
          bg="blackAlpha.200"
          borderRadius="7px"
        >
          <Text fontSize={[15, 16, 18, 20]}>
            Colaborá con el espacio y anotáte en nuestros cursos{" "}
            <strong>GRATIS</strong>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cooperativista;
