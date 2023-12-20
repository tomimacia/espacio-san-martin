import ConsultarFines from "@/components/Fines/ConsultarFines";
import FinesForm from "@/components/Fines/FinesForm";
import Layout from "@/components/Layouts/Article";

import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import FinesCuerpo from "@/public/FinesCuerpo.jpg";
const Fines = () => {
  const description =
    "¡Finalizá tus estudios en Espacio San Martín! Adherite a nuestro plan Fines y terminá tus estudios secundarios";
  return (
    <Layout hasMetaTags={false} pageTitle="Fines" headTitle="Fines">
      <Head>
        <meta property="og:description" content={description} />
        <meta property="og:image" itemProp="image" content={FinesCuerpo.src} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={FinesCuerpo.src} />
        <meta property="og:image:type" content="image/jpg" />
      </Head>
      <Box px={3}>
        <Heading as="h2" size="lg">
          ¡Impulsa tu Futuro con Nuestro Programa de Finalización de Estudios
          Secundarios!
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
              src={FinesCuerpo.src}
              height={500}
              width={500}
            />
          </Box>
          <Text>
            En Espacio San Martín, comprendemos que la educación es la clave
            para abrir puertas hacia un futuro más prometedor. Es por eso que
            presentamos nuestro plan &quot;Fines para Terminar el
            Secundario&quot;, diseñado específicamente para brindarte la
            oportunidad de completar tus estudios secundarios de manera
            accesible y flexible. Adaptamos el horario de las clases para que se
            ajuste a tus compromisos y responsabilidades diarias. <br />
            <br />
            <strong>Flexibilidad de Horarios:</strong>
            <br />
            Reconocemos que tu tiempo es valioso, y nuestro enfoque es
            permitirte avanzar en tus estudios sin sacrificar otros aspectos
            importantes de tu vida. Fomentamos un entorno educativo
            participativo y colaborativo. <br />
            <br />
            <strong>Metodología Participativa:</strong>
            <br />
            Creemos en el poder de la interacción y la participación activa de
            los estudiantes para mejorar la comprensión y retención del
            contenido. Nuestros profesores están comprometidos a brindarte el
            apoyo necesario para aprovechar al máximo tu experiencia educativa.
            Contarás con materiales didácticos actualizados y recursos
            pedagógicos de calidad. <br />
            <br />
            <strong>Materiales Didácticos Actualizados:</strong>
            <br />
            Nos aseguramos de que tengas acceso a la información más relevante y
            actualizada para respaldar tu aprendizaje y prepararte para el
            examen final. Reconocemos que cada estudiante tiene necesidades y
            ritmos de aprendizaje únicos. <br />
            <br />
            <strong>Acompañamiento Individualizado:</strong>
            <br />
            Ofrecemos un acompañamiento individualizado para garantizar que
            recibas la atención y el apoyo personalizado que necesitas para
            tener éxito en tus estudios. El objetivo principal de nuestro
            programa es prepararte de manera integral para el examen final.{" "}
            <br />
            <br />
            <strong>Preparación para el Examen Final:</strong>
            <br />
            Desarrollarás las habilidades y adquirirás los conocimientos
            necesarios para superar con éxito esta etapa crucial y obtener tu
            tan ansiado título secundario.
            <br />
            <br />
            <strong style={{ color: "red" }}>IMPORTANTE!</strong>
            <br />
            <strong>Documentación a Presentar:</strong>
            <br />
            Fotocopias:
            <UnorderedList>
              <ListItem>DNI</ListItem>
              <ListItem>CUIL</ListItem>
              <ListItem>
                Certificado de estudios completo o hasta cuando realizó
              </ListItem>
              <ListItem>Partida de nacimiento</ListItem>
            </UnorderedList>
            Debes ser mayor de 18 años. Se pueden inscribir los que hayan
            terminado primaria. Inicio en abril de 2024, con cupos limitados.
            <br />
            <br />
            <strong>Cómo Inscribirte:</strong>
            <br />
            La inscripción para nuestro programa &quot;Fines para Terminar el
            Secundario&quot; está abierta. ¡No dejes pasar esta oportunidad de
            dar un paso decisivo hacia la culminación de tus estudios
            secundarios! Inscríbete hoy mismo y forma parte de esta experiencia
            educativa que te acercará a la realización de tus metas académicas.
            En Espacio San Martín, creemos en tu potencial y estamos
            comprometidos a guiarte hacia el éxito. ¡Tu viaje hacia un futuro
            académico más brillante comienza aquí!
          </Text>
        </Flex>
        <FinesForm />
        <ConsultarFines />
      </Box>
    </Layout>
  );
};

export default Fines;
