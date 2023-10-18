import CursoNote from "@/components/Cursos/CursoNote";
import { deleteMultipleFiles } from "@/firebase/services/deleteFile";
import { deleteSingleDoc } from "@/firebase/services/deleteSingleDoc";
import { useCustomToast } from "@/hooks/useCustomToast";
import { GetCursosHookType } from "@/types/types";
import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import SedesDisplay from "./SedesDisplay";
import ConfirmModal from "@/components/ConfirmModal";

const CursosList = ({ CursosHook }: { CursosHook: GetCursosHookType }) => {
  const { errorToast, successToast } = useCustomToast();
  const [loading, setLoading] = useState(false);
  const { cursos, setCursos } = CursosHook;
  const deleteCurso = async (id: string, filepaths: string[]) => {
    setLoading(true);
    try {
      await deleteMultipleFiles(filepaths);
      await deleteSingleDoc("Cursos", id);
      const newCursos = cursos.filter((n) => n.id !== id);
      setCursos(newCursos);
      successToast("Curso eliminado correctamente");
    } catch (err: any) {
      console.log("Error deleting curso", err.message);
      errorToast("Error eliminando el curso");
    } finally {
      setLoading(false);
    }
  };
  const fontColor = useColorModeValue("brandLight", "blue.400");

  const EliminarCursoButtonProps = {
    m: 1,
    size: "sm",
    color: "white",
    bg: fontColor,
    alignSelf: "center",
    border: "1px solid gray",
    _hover: { opacity: 0.7 },
  };
  return (
    <>
      {cursos.map((n, ind) => {
        const { MainTitle, MainSubtitle, MainBody, MainIMG } = n.Main;
        const { Sedes } = n;
        return (
          <Flex
            border={"2px solid black"}
            p={2}
            borderRadius="10px"
            flexDir="column"
            key={"Noticia" + ind}
            gap={5}
          >
            <Heading alignSelf="center">{n.Card.CardTitle}</Heading>
            <CursoNote Curso={n.Card} />

            <Flex justify="center">
              <Text border="1px solid gray" borderRadius="5px" p={1}>
                Ver más <ArrowDownIcon />
              </Text>
            </Flex>

            <Flex gap={1} flexDir="column">
              <Flex alignSelf="center" flexDir="column">
                <Heading size="md">{MainTitle}</Heading>
              </Flex>
              <Divider w="70%" mx="auto" borderColor="gray.400" />

              <Flex justify="space-between">
                <Text alignSelf="center" maxW="75%">
                  {MainBody[0]}..
                </Text>
                <Flex flexDir="column">
                  <Image
                    alt="card-alt"
                    src={MainIMG.downloadURL}
                    height={150}
                    width={150}
                    objectFit="contain"
                  />
                </Flex>
              </Flex>
            </Flex>
            <Divider borderColor="black" />
            <SedesDisplay
              CursosHook={CursosHook}
              CursoTitle={n.Main.MainTitle}
              Sedes={Sedes}
              id={n.id}
            />
            <Flex justify="center">
              <ConfirmModal
                Title="Eiminar Curso"
                buttonProps={EliminarCursoButtonProps}
                handleClick={() =>
                  deleteCurso(n.id, [
                    n.Card.CardIcon.filePath,
                    MainIMG.filePath,
                  ])
                }
                isLoading={loading}
                ButtonText="Eliminar Curso"
              >
                <Text>
                  Estas seguro que deseas eliminar el Curso de{" "}
                  <strong>{n.Main.MainTitle}</strong>?
                </Text>
              </ConfirmModal>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default CursosList;
