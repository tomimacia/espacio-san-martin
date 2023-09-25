import HeaderLogo from "@/public/LogoNavbar.jpg";
import { MainLayoutType } from "@/types/types";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }: MainLayoutType) => {
  return (
    <Flex
      flexDir="column"
      minH="100vh"
      bg={useColorModeValue("#e4e5f1", "gray.700")}
      h="100%"
      as="main"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Espacio para el crecimiento personal y social"
        />
        <meta name="author" content="Tomas Macia" />
        <meta name="instagram:site" content="@sanmartinjuancruzok" />
        <meta name="instagram:creator" content="@tomimacia" />
        <meta property="og:site_name" content="Espacio San Martín" />
        <meta property="og:title" content="Espacio San Martin" />

        <meta
          property="og:description"
          content="Espacio para el crecimiento personal y social"
        />
        <meta
          property="og:image"
          content="https://www.sanmartinjuancruz.com.ar/LogoNavbar.jpg"
        />
        <meta
          property="og:url"
          content="https://www.sanmartinjuancruz.com.ar/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          name="msapplication-TileImage"
          content="https://www.sanmartinjuancruz.com.ar/LogoNavbar.jpg"
        />
        <link
          href="https://www.sanmartinjuancruz.com.ar/favicon.ico"
          rel="apple-touch-icon"
        />
        <link rel="icon" href={HeaderLogo.src} />
      </Head>
      <Navbar />
      <ScrollToTop title="Ir arriba" style={{ padding: "6px" }} smooth />
      <Flex
        flexGrow={1}
        overflow="hidden"
        mx="auto"
        w="100%"
        maxW="1500px"
        pb="4rem"
        pt={["6.4rem", "7.6rem"]}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
