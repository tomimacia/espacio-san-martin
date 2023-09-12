import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { FiSmartphone } from "react-icons/fi";
import Media from "./Media";

const Redes = () => {
  const size = useBreakpointValue([, 22, 24, 26, 28, 30]);
  return (
    <Box>
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
      <Heading size={{ base: "sm", sm: "md" }} fontWeight="normal">
        Y enterate de todas nuestras noticias!
      </Heading>
      <Media dir="row" size={size} colored />
    </Box>
  );
};
export default Redes;
