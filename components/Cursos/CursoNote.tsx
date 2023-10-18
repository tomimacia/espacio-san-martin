import { CardCursoType, CursoNoteType } from "@/types/types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const CursoNote = ({ Curso, id }: { Curso: CardCursoType; id?: string }) => {
  const { CardIcon, CardIntro, CardTitle } = Curso;

  return (
    <Card w="100%" border="1px solid gray">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center">
            <Avatar name={CardTitle} src={CardIcon.downloadURL} />
            <Box>
              <Heading size="sm">{CardTitle}</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{CardIntro}</Text>
      </CardBody>
      {id && (
        <CardFooter>
          <Button
            as={Link}
            href={`/Cursos/${id}`}
            shallow={true}
            m="auto"
            size="sm"
            bg="blue.300"
          >
            Ver mas
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
export default CursoNote;
