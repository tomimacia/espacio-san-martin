import { LinkAndIconType } from "@/types/types";
import { Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const LinkAndIcon = ({ href, title, children }: LinkAndIconType) => {
  return (
    <Flex align="center" fontSize={18} gap={2}>
      <Text wordBreak="break-word" fontFamily="montserrat">
        {title}
      </Text>
      <Link
        as={NextLink}
        _hover={{ opacity: 0.4 }}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </Link>
    </Flex>
  );
};
