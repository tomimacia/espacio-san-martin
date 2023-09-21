import Layout from "@/components/Layouts/Main";
import { useRouterEvent } from "@/hooks/useRouterEvents";
import { customTheme } from "@/styles/theme";
import { ChakraProvider, Progress } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/raleway/400.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useRouterEvent();
  return (
    <ChakraProvider theme={customTheme}>
      {loading && (
        <Progress
          h={2}
          colorScheme="purple"
          bg="transparent"
          top={["140px", "105px", "105px", "105px"]}
          w="100%"
          isIndeterminate
          position="fixed"
          zIndex={100}
        />
      )}
      <Layout>
        <AnimatePresence mode="wait" initial>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
