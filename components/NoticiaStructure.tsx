import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
type CursoStr = {
  title: string;
  subtitle: string;
  description: string[];
  imageFooter: string;
  img: string;
};
const NoticiaStructure = ({
  title,
  subtitle,
  imageFooter,
  description,
  img,
}: CursoStr) => {
  return (
    <>
      <Head>
        <meta property="og:description" content={title} />
        <meta
          property="og:image"
          content={`https://www.sanmartinjuancruz.com.ar/Cursos/${img}.jpeg`}
        />
      </Head>
      <Flex py={10} gap={5} w="100%" flexDir="column">
        <Flex flexDir="column" align="center" justify="center" w="100%">
          <Heading textAlign="center">{title}</Heading>
          <Button
            size="xs"
            textDecor="underline"
            as={NextLink}
            _hover={{ color: "blue" }}
            alignSelf="flex-end"
            href="/"
            bg="transparent"
          >
            <ArrowBackIcon />
            Volver
          </Button>
        </Flex>
        <Divider borderColor="gray.500" w="85%" m="auto" />
        <Text textAlign="center" fontStyle="italic">
          {subtitle}
        </Text>
        <Flex display="block" gap={2} p={3} flexDir="column">
          <Box float="right" p={1}>
            <Image
              style={{
                objectFit: "contain",
                objectPosition: "center",
                borderRadius: "10px",
              }}
              alt={imageFooter}
              src={img}
              height={500}
              width={500}
            />
            <Text fontStyle="italic">{imageFooter}</Text>
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
        <Text fontStyle="italic" ml={3}>
          Para más información{" "}
          {
            <Link
              as={NextLink}
              href="/Contacto"
              color={useColorModeValue("blue", "blue.200")}
              _hover={{ textDecor: "underline" }}
            >
              Contáctanos!
            </Link>
          }
        </Text>
      </Flex>
    </>
  );
};

export default NoticiaStructure;
