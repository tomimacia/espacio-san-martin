import Layout from "@/components/Layouts/Article";
import { BioText } from "@/components/Nosotros/BioText";
import { Box } from "@chakra-ui/react";
const Bio = () => {
  return (
    <Layout pageTitle="Juan Cruz San Martin" headTitle="Nosotros">
      <Box px={7}>
        <BioText />
      </Box>
    </Layout>
  );
};

export default Bio;
