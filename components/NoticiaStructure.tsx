import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
type CursoStr = {
  title: string;
  subtitle: string;
  description: string[];
  img: string;
};
const NoticiaStructure = ({ title, subtitle, description, img }: CursoStr) => {
  return (
    <Flex py={10} gap={5} w="100%" flexDir="column">
      <Flex flexDir="column" align="center" justify="center" w="100%">
        <Heading textAlign="center">{title}</Heading>
        <Button
          size="xs"
          textDecor="underline"
          as={Link}
          _hover={{ color: "blue" }}
          alignSelf="flex-end"
          href="/"
          bg='transparent'
        >
          <ArrowBackIcon />
          Volver
        </Button>
      </Flex>
      <Divider borderColor="gray.500" w="85%" m="auto" />
      <Flex display="block" gap={2} p={3} flexDir="column">
        <Box float="right" p={1}>
          <Image
            style={{
              objectFit: "contain",
              objectPosition: "center",
              borderRadius: "10px",
            }}
            alt={title}
            src={img}
            height={500}
            width={500}
          />
          <Text fontStyle="italic">{subtitle}</Text>
        </Box>
        <Text fontWeight="bold">
          {description.map((line) => {
            return (
              <>
                {line}
                <br />
                <br />
              </>
            );
          })}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NoticiaStructure;
