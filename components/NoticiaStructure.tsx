import dateTexto from "@/helpers/dateTexto";
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
import { Fragment } from "react";
import { NoticiaStructureType } from "@/types/types";
const NoticiaStructure = ({
  MainNoticia,
  DateSeconds,
}: NoticiaStructureType) => {
  const { MainBody, MainIMG, Embed, MainImgFooter, MainSubtitle, MainTitle } =
    MainNoticia;
  const { downloadURL } = MainIMG;
  return (
    <>
      <Flex py={10} gap={5} w="100%" flexDir="column">
        <Flex flexDir="column" align="center" justify="center" w="100%">
          <Heading maxW="85%" textAlign="center">
            {MainTitle}
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
          {MainSubtitle}
        </Text>
        {Embed && (
          <Flex
            h="351px"
            flexDir="column"
            align="center"
            position="relative"
            overflow="hidden"
          >
            {/* Background with blur filter */}
            <Box
              top={0}
              left={0}
              pos="absolute"
              w="100vw"
              h="100%"
              filter="blur(4px)"
              bgGradient="linear(to-b, rgba(56, 21, 102,0.8),rgba(98, 51, 191,0.6))"
            />

            {/* YouTube video iframe */}
            <iframe
              style={{
                borderRadius: "5px",
                boxShadow: "3px 3px 3px 3px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "92vw",
              }}
              width="600"
              height="340"
              src={`https://www.youtube.com/embed/${Embed}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Flex>
        )}
        <Flex display="block" gap={2} p={2} flexDir="column">
          <Box float="right" p={1}>
            <Image
              style={{
                objectFit: "contain",
                objectPosition: "center",
                borderRadius: "10px",
              }}
              alt={MainImgFooter}
              src={downloadURL}
              priority
              height={500}
              width={500}
            />
            <Text fontStyle="italic">{MainImgFooter}</Text>
          </Box>

          <Text fontWeight="bold">
            {MainBody.map((line, ind) => {
              return (
                <Fragment key={"DescriptionLine-" + ind}>
                  {line}
                  <br />
                </Fragment>
              );
            })}
          </Text>
        </Flex>
        {MainTitle === "Espacio San Martín se Expande a YouTube y TikTok" && (
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
