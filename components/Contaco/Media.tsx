import { mediaType } from "@/types/types";
import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
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
    {
      Href: "https://www.youtube.com/channel/UCVWoqlM9Z_914RjMH4d2mFQ",
      Title: "Youtube",
      Icon: AiFillYoutube,
      Color: "FF0000",
    },
    {
      Href: "https://www.tiktok.com/@espaciosanmartin",
      Title: "TikTok",
      Icon: BiLogoTiktok,
      Color: "ff0050",
    },
  ];
  return (
    <Flex align="center" gap={[1, 2, 3, 4]}>
      <Flex
        flexDir={dir}
        flexWrap="wrap"
        align="center"
        gap={[1, 2, 3, 4]}
        mt={colored ? 3 : undefined}
        fontSize={25}
        minW="57px"
      >
        {SocialItems.map((item) => {
          const { Href, Title, Icon, Color } = item;
          const BgColor = colored ? Color : "#6DC6E7";
          return (
            <Box key={Href} _hover={{ opacity: 0.7 }}>
              <Link
                href={Href}
                target="_blank"
                rel="noopener noreferrer"
                title={Title}
              >
                <Icon fontSize={size} color={BgColor} />
              </Link>
            </Box>
          );
        })}
      </Flex>
      {!colored && <ShareButton />}
    </Flex>
  );
};

export default Media;
