import dateTexto from "@/helpers/dateTexto";
import { NoticiaStructureType } from "@/types/types";
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
import Image from "next/image";
import NextLink from "next/link";
import Media from "./Contaco/Media";

const NoticiaStructure = ({
  title,
  subtitle,
  imageFooter,
  description,
  img,
  DateSeconds,
}: NoticiaStructureType) => {
  return (
    <>
      <Flex py={10} gap={5} w="100%" flexDir="column">
        <Flex flexDir="column" align="center" justify="center" w="100%">
          <Heading maxW="85%" textAlign="center">
            {title}
          </Heading>
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
        <Flex flexDir="column" w="85%" m="auto">
          <Text fontStyle="italic" fontSize={14}>
            {dateTexto(DateSeconds)}
          </Text>
          <Divider borderColor="gray.500" />
        </Flex>

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
              priority
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
                </>
              );
            })}
          </Text>
        </Flex>
        {title === "Espacio San Martín se Expande a YouTube y TikTok" && (
          <Flex px={4} flexDir="column">
            <Heading size="md">Siguenos en nuestras redes!</Heading>
            <Media dir="row" size={30} colored />
          </Flex>
        )}
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
