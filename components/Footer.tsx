import { Center, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Center
      pos="absolute"
      id="FooterID"
      bottom={0}
      h="4rem"
      w="100%"
      opacity={0.7}
      fontSize={{ base: "xs", sm: "sm" }}
    >
      &copy; {new Date().getFullYear()} Espacio San Martín. Todos los derechos
      reservados.
      <span
        style={{
          position: "absolute",
          right: 15,
          bottom: 4,
          fontWeight: "bold",
          color: useColorModeValue("black", "white"),
        }}
      >
        Diseño:{"  "}
        <Link
          href="https://www.tomasmacia.com.ar"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: useColorModeValue("#000075", "#B1D4E0") }}
        >
          Tomás Macía
        </Link>
      </span>
    </Center>
  );
};

export default Footer;
