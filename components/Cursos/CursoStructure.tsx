import { Curso } from "@/types/types";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import { CursoForm } from "./CursosForm";
const CursoStructure = ({ Curso }: Curso) => {
  const { title, subtitle, description, img } = Curso;
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
          href="/Cursos"
          bg="transparent"
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
              border: "1px solid rgba(175, 175, 175, 0.4)",
              padding: 1,
            }}
            loading="lazy"
            alt={title}
            src={img}
            height={500}
            width={500}
          />
          <Text fontStyle="italic">{subtitle}</Text>
        </Box>
        <Text fontWeight="bold">
          {description.map((line, ind) => {
            return (
              <Fragment key={ind + "Description"}>
                {line}
                <br />
                <br />
              </Fragment>
            );
          })}
        </Text>
      </Flex>
      <CursoForm curso={title} />
    </Flex>
  );
};

export default CursoStructure;
