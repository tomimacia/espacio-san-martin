import { ArticleLayoutType } from "@/types/types";
import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { zIndex: 0, x: 20, opacity: 0 },
  visible: { zIndex: 0, x: 0, opacity: 1 },
  exit: { zIndex: 1, x: 20, opacity: 0 },
};
const Layout = ({ children, headTitle, pageTitle }: ArticleLayoutType) => {
  const t = `${headTitle} - Espacio San Martín`;
  const DivierColor = useColorModeValue("blackAlpha.300", "whiteAlpha.600");

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
            <meta property="og:title" content='Espacio San Martín - Inicio' />
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
