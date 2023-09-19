import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LinkAndIcon } from "./Items/LinkAndIcon";
const ACTIVE_EMAIL = "sanmartinjuancruz@gmail.com";
const PHONE_NUMBER = "11-2500-0742"
const AREA_CODE = "54"
const WA_LINK = "wa.link/7agy9w"
const Turnos = () => {
  return (
    <Box>
      <Heading size="lg" fontWeight="medium" mb={2}>
        Contáctanos!
      </Heading>
      <Flex flexDir="column" gap={2} pt={5}>
        <LinkAndIcon href={`tel:+${AREA_CODE} ${PHONE_NUMBER}`} title={`(+${AREA_CODE}) ${PHONE_NUMBER}`}>
          <PhoneIcon color="#3b5998"/>
        </LinkAndIcon>
        <LinkAndIcon href={`mailto:${ACTIVE_EMAIL}`} title={ACTIVE_EMAIL}>
          <EmailIcon color='#808080' />
        </LinkAndIcon>
        <LinkAndIcon href={`https://${WA_LINK}`} title="WhatsApp">
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
