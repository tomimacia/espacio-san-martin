import { AspectRatio, Flex } from "@chakra-ui/react";

export const Mapa = () => {
  return (
    <Flex p={3}>
      <AspectRatio w={["100%", "90%", "80%", "70%"]} ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.105505562852!2d-58.4011961!3d-34.752935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd381c883356d%3A0x44cf488e77714fba!2sConsultorio%20M%C3%A9dico%20Dr.Pablo%20David%20Depierre!5e0!3m2!1ses!2sar!4v1684826700088!5m2!1ses!2sar"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </Flex>
  );
};
