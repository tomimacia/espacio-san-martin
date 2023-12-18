import { ArticleLayoutType } from "@/types/types";
import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

const variants = {
  hidden: { zIndex: 0, x: 20, opacity: 0 },
  visible: { zIndex: 0, x: 0, opacity: 1 },
  exit: { zIndex: 1, x: 20, opacity: 0 },
};
const Layout = ({
  children,
  headTitle,
  pageTitle,
  hasMetaTags = true,
}: ArticleLayoutType) => {
  const t = `${headTitle} - Espacio San Martín`;
  const DivierColor = useColorModeValue("blackAlpha.300", "whiteAlpha.600");
  const { asPath } = useRouter();
  const domain = "sanmartinjuancruz.com.ar";
  const URL = `https://www.${domain}${asPath}`;

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.8, type: "tween" }}
      style={{
        width: "100%",
        scrollBehavior: "smooth",
      }}
    >
      <Box
        borderRadius="10px"
        height="100%"
        bg={useColorModeValue("whiteAlpha.600", "blackAlpha.200")}
        w="100%"
      >
        {headTitle && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta name="og:url" content={URL} />
            <meta property="twitter:url" content={URL} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={domain} />
            {hasMetaTags && (
              <>
                <meta
                  property="og:description"
                  content="Espacio para el crecimiento personal y social"
                />
                <meta property="og:image:type" content="image/jpg" />

                <meta
                  name="twitter:description"
                  content="Espacio para el crecimiento personal y social"
                />
                <meta
                  name="twitter:image"
                  content="https://www.sanmartinjuancruz.com.ar/LogoNavbar.jpg"
                />

                <meta
                  property="og:image"
                  content="https://www.sanmartinjuancruz.com.ar/LogoNavbar.jpg"
                />
              </>
            )}
          </Head>
        )}

        {pageTitle && (
          <>
            <Heading as={"h1"} size="2xl" m={6} pt={7}>
              {pageTitle}
            </Heading>
            <Divider w="100%" my={5} borderColor={DivierColor} />
          </>
        )}
        {children}
      </Box>
    </motion.article>
  );
};
export default Layout;
