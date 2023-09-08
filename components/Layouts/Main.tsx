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
          content="Espacio San Martín"
        />
        <meta name="author" content="Tomas Macia" />
        <meta name="instagram:site" content="@consultoriodoctordepierre" />
        <meta name="instagram:creator" content="@tomimacia" />
        <meta
          property="og:site_name"
          content="Espacio San Martín"
        />
        {/* <meta name="google-site-verification" content="jkvmvPiTSvoqywlN7TQIwB7pYM0r4YRHSLnQcfRVYwQ" /> */}
        <meta name="og:title" content="San Martin Espacio" />
        <meta property="og:type" content="website" />
        <link
          href="https://sanmartinjuancruz.com.ar/favicon.ico"
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
