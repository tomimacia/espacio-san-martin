import Layout from "@/components/Layouts/Main";
import { customTheme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/raleway/400.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <AnimatePresence mode="wait" initial>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}