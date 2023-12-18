import { CursoSede, MainCursoType } from "@/types/types";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { CursoForm } from "./CursosForm";
import SedesDisplayData from "./SedesDisplayData";
import { FinesForm } from "../Fines/FinesForm";
const BackButton = () => {
  return (
    <Button
      size="md"
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
  );
};
const CursoStructure = ({
  Curso,
  Sedes,
}: {
  Curso: MainCursoType;
  Sedes: CursoSede[];
}) => {
  const { MainTitle, MainSubtitle, MainBody, MainIMG } = Curso;
  const { downloadURL } = MainIMG;
  const [selectedSede, setSelectedSede] = useState<CursoSede>(Sedes[0]);

  return (
    <>
      <Flex py={10} gap={5} w="100%" flexDir="column">
        <Flex flexDir="column" align="center" justify="center" w="100%">
          <Heading textAlign="center">{MainTitle}</Heading>
          <BackButton />
        </Flex>
        <Divider borderColor="gray.500" w="85%" m="auto" />
        <Text textAlign="center" fontStyle="italic">
          {MainSubtitle}
        </Text>
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
              alt={MainTitle}
              src={downloadURL}
              height={500}
              width={500}
            />
          </Box>
          <Text fontWeight="bold">
            {MainBody.map((line, ind) => {
              return (
                <Fragment key={ind + "Description"}>
                  {line}
                  <br />
                </Fragment>
              );
            })}
          </Text>
        </Flex>
        <Heading px={5}>Sedes Disponibles</Heading>
        {Sedes.length > 0 ? (
          <SedesDisplayData
            selectedSede={selectedSede}
            setSelectedSede={setSelectedSede}
            Sedes={Sedes}
          />
        ) : (
          "No hay sedes"
        )}
        <BackButton />

        <CursoForm curso={MainTitle} selectedSede={selectedSede} />
      </Flex>
    </>
  );
};

export default CursoStructure;
