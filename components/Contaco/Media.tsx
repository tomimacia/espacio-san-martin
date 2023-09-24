import { mediaType } from "@/types/types";
import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import ShareButton from "../ShareButton";

const Media = ({ dir, size, colored = false }: mediaType) => {
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
    <Flex
      flexDir={dir}
      align="center"
      gap={[1.5, 3, 4.5, 6]}
      ml={2}
      fontSize={25}
      pt={3}
    >
      {SocialItems.map((item) => {
        const { Href, Title, Icon, Color } = item;
        return (
          <Box key={Href} _hover={{ opacity: 0.7 }}>
            <Link
              href={Href}
              target="_blank"
              rel="noopener noreferrer"
              title={Title}
            >
              <Icon fontSize={size} color={colored ? Color : "#6DC6E7"} />
            </Link>
          </Box>
        );
      })}
      {!colored && <ShareButton />}
    </Flex>
  );
};

export default Media;
