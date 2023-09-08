import Layout from "@/components/Layouts/Article";
import { Intro } from "@/components/Nosotros/Intro";
import { Box } from "@chakra-ui/react";
const Nosotros = () => {
  return (
    <Layout pageTitle="Nosotros" headTitle="Nosotros">
      <Box px={7}>
        <Intro />
      </Box>
    </Layout>
  );
};

export default Nosotros;
