import { NewBoxType } from "@/types/types";
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const NewBox = ({ Title, SubTitle, Day, Time }: NewBoxType) => {
  return (
    <Flex flexDir="column">
      <Heading color="green" as="h2" size="md">
        {Title}
      </Heading>
      <Text fontSize={18} textDecor="underline" fontWeight="bold">
        {SubTitle}
      </Text>
      <Flex flexDir="column" gap={1} p={2}>
        <Text fontSize={18} fontFamily="montserrat">
          {Day}
        </Text>
        <Text fontSize={18} fontWeight="bold" fontFamily="montserrat">
          {Time}
        </Text>
      </Flex>
    </Flex>
  );
};

export const Noticias = () => {
  const NewsList = [
    {
      Title: "Nuevo Horario",
      SubTitle: "Ecocardiograma",
      Day: "Todos los viernes",
      Time: "A partir de las 13:00HS",
    },
    {
      Title: "Nuevo Servicio",
      SubTitle: "Encefalograma",
      Day: "Todos los viernes",
      Time: "A partir de las 12:00HS",
    },
  ];
  return (
    <Box w="309px">
      <Heading size="lg" fontWeight="medium" mb={2}>
        <InfoIcon mr={1} color="green" /> Nuevo!
      </Heading>

      <Flex flexDir='column' gap={2}>
        {NewsList.map((News) => {
          const { Title, SubTitle, Day, Time } = News;
          return (
            <NewBox
              key={Title}
              Title={Title}
              SubTitle={SubTitle}
              Day={Day}
              Time={Time}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
