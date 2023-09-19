import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export const Intro = () => {
  return (
    <Text fontSize={{ base: 14, sm: 20 }}>
      ¡Bienvenidos a <strong>Espacio San Martín</strong>!
      <br />
      <br />
      Somos un lugar amplio de contención y formación al servicio de los
      vecinos. Con 5 sedes en <strong>San Sebastián</strong>,{" "}
      <strong>Zaizar</strong>, <strong>Las Manitos</strong>,{" "}
      <strong>Chacritas</strong> y <strong>Monte Grande</strong>, nos
      enorgullece ser un faro de apoyo y aprendizaje en su comunidad.
      <br />
      <br />
      <strong>Juan Cruz San Martín</strong>, Abogado y Especialista en Salud
      Mental, lidera nuestro espacio con su profundo compromiso y experiencia.
      <Link
        as={NextLink}        
        href="/Bio"
        color={useColorModeValue("blue", "blue.200")}
        _hover={{ textDecor: "underline" }}
      >
       {" "} Ver más sobre Juan Cruz
      </Link>
      <br />
      <br />
      En <strong>Espacio San Martín</strong>, creemos que la educación y el
      apoyo son las llaves que abren puertas hacia un futuro más brillante. Por
      eso, ofrecemos una amplia gama de cursos actuales que abarcan desde el
      desarrollo personal hasta el crecimiento profesional. Entre nuestras
      ofertas de capacitación actualmente disponibles se incluyen:
      <br />
      <br />- <strong>Acompañante Terapéutico:</strong> Un curso que brinda las
      habilidades y el conocimiento necesarios para brindar apoyo emocional y
      asistencia a personas que lo necesitan.
      <br />- <strong>Barbería:</strong> Una oportunidad para aprender las
      habilidades artísticas y técnicas necesarias para convertirse en un
      experto en el cuidado de la imagen personal.
      <br />- <strong>Teatro:</strong> Donde la expresión creativa y el talento
      escénico se unen para permitirte explorar el mundo de la actuación.
      <br />- <strong>Capacitación Post Escolar:</strong> Un programa diseñado
      para ayudar a los estudiantes a adquirir las habilidades necesarias para
      enfrentar los desafíos del mundo laboral después de la escuela.
      <br />- <strong>Asesoría Legal Gratuita:</strong> Un servicio invaluable
      que brindamos para resolver dudas y problemas legales que puedan surgir en
      tu vida.
      <br />- <strong>Clases de Apoyo Escolar:</strong> Un recurso esencial para
      estudiantes de todas las edades que necesitan un impulso adicional en su
      educación.
      <br />
      <br />Y mucho más. En <strong>Espacio San Martín</strong>, estamos
      comprometidos con su bienestar y crecimiento. Nuestra comunidad es nuestra
      prioridad, y esperamos poder servirles y ser su socio en su viaje hacia el
      éxito y el bienestar. Juntos, podemos alcanzar metas, superar obstáculos y
      forjar un futuro más prometedor. ¡Únete a nosotros en{" "}
      <strong>Espacio San Martín</strong> y descubre el potencial que llevas
      dentro!
    </Text>
  );
};
