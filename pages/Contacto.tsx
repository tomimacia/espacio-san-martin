import { Formulario } from "@/components/Contaco/Formulario";
import { Horarios } from "@/components/Contaco/Horarios";
import RedesSociales from "@/components/Contaco/Redes";
import Turnos from "@/components/Contaco/Turnos";
import Ubicación from "@/components/Contaco/Ubicación";
import Layout from "@/components/Layouts/Article";
import { Flex } from "@chakra-ui/react";

const Contacto = () => {
  return (
    <Layout headTitle="Contacto" pageTitle="Contacto">
      <Flex flexDir="column" gap={[10,20]} px={[2, 4, 6, 8, 10]}>
        <Flex
          justify="space-between"
          gap={10}
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <RedesSociales />
          <Horarios />
        </Flex>
        <Turnos />
        <Ubicación />
        <Formulario />
      </Flex>
    </Layout>
  );
};

export default Contacto;
