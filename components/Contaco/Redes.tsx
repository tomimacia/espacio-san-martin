import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";

const Redes = () => {
  const SocialItems = [
    {
      Href: "https://www.facebook.com/profile.php?id=1011500217",
      Title: "Facebook",
      Icon: AiFillFacebook,
      Color: "3b5998",
    },
    {
      Href: "https://www.instagram.com/sanmartinjuancruzok/?hl=es",
      Title: "Instagram",
      Icon: AiFillInstagram,
      Color: "3f729b",
    },
  ];
  return (
    <Box>
      <Heading
        size="lg"
        gap={1}
        display="inline-flex"
        fontWeight="medium"
        mb={2}
      >
        <FiSmartphone color="#808080" style={{ fontSize: 28, marginTop: 4 }} />{" "}
        Seguínos en nuestras redes sociales!
      </Heading>
      <Heading size={{ base: "sm", sm: "md" }} fontWeight="normal">
        Y enterate de todas nuestras noticias!
      </Heading>
      <Flex gap={6} ml={2} fontSize={25} pt={3}>
        {SocialItems.map((item) => {
          const { Href, Title, Icon, Color } = item;
          return (
            <Box key={Href} _hover={{ opacity: 0.7 }}>
              <Link
                href={Href}
                target="_blank"
                rel="noopnere noreferrer"
                title={Title}
              >
                <Icon color={Color} />
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export default Redes;
