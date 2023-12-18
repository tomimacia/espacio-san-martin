import ConsultarCooperativistas from "@/components/Cooperativistas/ConsultarCooperativistas";
import CooperativistaForm from "@/components/Cooperativistas/CooperativistaForm";
import Layout from "@/components/Layouts/Article";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import CooperativistaImg from "@/public/cooperativa.jpg";
const Cooperativistas = () => {
  const description =
    "¡Adherite a Espacio San Martín como cooperativista! Colaborá en el espacio y anotate gratis a nuestros cursos";
  return (
    <Layout
      hasMetaTags={false}
      pageTitle="Cooperativistas"
      headTitle="Cooperativistas"
    >
      <Head>
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          itemProp="image"
          content={CooperativistaImg.src}
        />
        <meta property="og:image:type" content="image/jpg" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={CooperativistaImg.src} />
      </Head>
      <Box px={3}>
        <Heading as="h2" size="lg">
          ¡Elegí Espacio San Martín y construí tu futuro con nosotros!
        </Heading>
        <Flex display="block" gap={2} my={5} flexDir="column">
          <Box float="right" p={1}>
            <Image
              style={{
                objectFit: "contain",
                objectPosition: "center",
                borderRadius: "10px",
                border: "1px solid rgba(175, 175, 175, 0.4)",
                padding: 1,
              }}
              loading="lazy"
              alt="Cooperativistas-logo-alt"
              src={CooperativistaImg.src}
              height={500}
              width={500}
            />
          </Box>
          <Text>
            En <strong>Espacio San Martín</strong>, entendemos la importancia de
            la colaboración y el aprendizaje mutuo. Por ello, extendemos una
            invitación especial a los cooperativistas beneficiarios de planes
            sociales. Al unirte a nuestra comunidad, no solo encontrarás un
            espacio de desarrollo personal y profesional, sino que también
            tendrás la oportunidad de contribuir al bienestar colectivo.
            <br />
            <br />
            Nuestro programa ofrece la posibilidad de dedicar{" "}
            <strong>4 horas, 3 veces por semana</strong>, para colaborar
            activamente en el espacio. A cambio, te brindamos acceso gratuito a
            diversos cursos diseñados para potenciar tus habilidades y
            conocimientos. Creemos en el poder de la formación y la solidaridad
            para construir un futuro más próspero.
            <br />
            <br />
            En <strong>Espacio San Martín</strong>, buscamos no solo fortalecer
            individualmente a nuestros miembros, sino también crear una red de
            apoyo y crecimiento conjunto. Únete a nosotros y participa en esta
            experiencia única que va más allá de la capacitación: es una
            oportunidad para construir un camino sólido hacia el progreso
            personal y comunitario. ¡Te esperamos con los brazos abiertos para
            compartir este viaje juntos!
            <br />
            <br />
          </Text>
        </Flex>
        <CooperativistaForm />
        <ConsultarCooperativistas />
      </Box>
    </Layout>
  );
};

export default Cooperativistas;
