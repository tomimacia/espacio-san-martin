import { LinkAndIconType } from "@/types/types";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const LinkAndIcon = ({ href, title, children }: LinkAndIconType) => {
  return (
    <Flex fontSize={18} gap={2}>
      <Link href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </Link>
      <Text wordBreak="break-word" fontFamily="montserrat">
        {title}
      </Text>
    </Flex>
  );
};
