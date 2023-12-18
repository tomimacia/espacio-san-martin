import HeaderLogo from "@/public/LogoNavbar.jpg";
import { MainLayoutType } from "@/types/types";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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

        <meta property="og:type" content="website" />
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
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
        <Analytics />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
