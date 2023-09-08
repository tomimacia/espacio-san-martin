import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LinkAndIcon } from "./Items/LinkAndIcon";
const ACTIVE_EMAIL = "sanmartinjuancruz@gmail.com.ar";

const Turnos = () => {
  return (
    <Box>
      <Heading size="lg" fontWeight="medium" mb={2}>
        ¿Necesitás un turno?
      </Heading>
      <Flex flexDir="column" gap={2} pt={5}>
        <Text fontSize={23}>Contacto</Text>
        <LinkAndIcon href="tel:+54 11-6658-3115" title="(+54) 11-6658-3115">
          <PhoneIcon color="#3b5998"/>
        </LinkAndIcon>
        <LinkAndIcon href={`mailto:${ACTIVE_EMAIL}`} title={ACTIVE_EMAIL}>
          <EmailIcon color='#808080' />
        </LinkAndIcon>
        <LinkAndIcon href="https://wa.link/cwktth" title="WhatsApp">
          <AiOutlineWhatsApp color="#25D366" />
        </LinkAndIcon>
        <Text fontSize={18}>
          Uno de nuestros representantes te asistirá con tu consulta!
        </Text>
      </Flex>
    </Box>
  );
};

export default Turnos;
