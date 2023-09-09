import { mediaType } from "@/types/types";
import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Media = ({ dir, size }: mediaType) => {
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
    <Flex flexDir={dir} gap={6} ml={2} fontSize={25} pt={3}>
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
              <Icon fontSize={size} color={Color} />
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Media;
