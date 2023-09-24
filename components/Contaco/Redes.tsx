import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { FiSmartphone } from "react-icons/fi";
import RedesWrap from "./Items/RedesWrap";
import Media from "./Media";

const Redes = () => {
  const size = useBreakpointValue([, 22, 24, 26, 28, 30]);
  return (
    <Flex flexDir="column" gap={5} justify="space-between">
      <Heading
        size="lg"
        gap={1}
        display="inline-flex"
        fontWeight="medium"
        mb={2}
      >
        <FiSmartphone color="#808080" style={{ fontSize: 28, marginTop: 4 }} />{" "}
        Seguínos en nuestras redes sociales!
      </Heading>
      <Flex flexDir="column">
        <Heading size={{ base: "sm", sm: "md" }} fontWeight="normal">
          Y enterate de todas nuestras noticias!
        </Heading>
        <Media dir="row" size={size} colored />
      </Flex>
      <Flex flexDir="column">
        <Heading size={{ base: "sm", sm: "md" }} fontWeight="normal">
          Comparte en redes!
        </Heading>
        <Flex p={2} mt={3} maxW="200px">
          <RedesWrap size={25} gap={3} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Redes;
