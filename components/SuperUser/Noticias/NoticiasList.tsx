import ConfirmModal from "@/components/ConfirmModal";
import { deleteMultipleFiles } from "@/firebase/services/deleteFile";
import { deleteSingleDoc } from "@/firebase/services/deleteSingleDoc";
import destructureDate from "@/helpers/destructureDate";
import { useCustomToast } from "@/hooks/useCustomToast";
import { NoticiaTypeDB } from "@/types/types";
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

type NoticiasListType = {
  noticias: NoticiaTypeDB[];
  setNoticias: (newNoticias: NoticiaTypeDB[]) => void;
};

const NoticiasList = ({ noticias, setNoticias }: NoticiasListType) => {
  const { errorToast, successToast } = useCustomToast();
  const [loading, setLoading] = useState(false);
  const deleteNoticia = async (id: string, filepaths: string[]) => {
    setLoading(true);
    try {
      await deleteMultipleFiles(filepaths);
      await deleteSingleDoc("Noticias", id);
      const newNoticias = noticias.filter((n) => n.id !== id);
      setNoticias(newNoticias);
      successToast("Noticia eliminada correctamente");
    } catch (err: any) {
      console.log("Error deleting noticia", err.message);
      errorToast("Error eliminando la noticia");
    } finally {
      setLoading(false);
    }
  };
  const fontColor = useColorModeValue("brandLight", "blue.400");

  const EliminarNoticiaButtonProps = {
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
      {noticias
        .sort((a, b) => a.Date.seconds - b.Date.seconds)
        .reverse()
        .map((n, ind) => {
          const { CardTitle, CardIntro, CardIMG } = n.Card;
          const { MainTitle, MainSubtitle, MainBody, MainImgFooter, MainIMG } =
            n.Main;
          return (
            <Flex
              border={"2px solid black"}
              p={2}
              borderRadius="10px"
              flexDir="column"
              key={"Noticia" + ind}
              gap={5}
            >
              <Flex gap={1} flexDir="column">
                <Heading alignSelf="center" size="md">
                  {CardTitle}
                </Heading>
                <Flex w="100%" justify="space-between">
                  <Flex flexDir="column" maxW="70%">
                    <Text>{CardIntro[0]}..</Text>
                  </Flex>
                  <Image
                    alt="card-alt"
                    src={CardIMG.downloadURL}
                    objectFit="contain"
                    height={100}
                    width={100}
                  />
                </Flex>
              </Flex>
              <Flex justify="center">
                <Text border="1px solid gray" borderRadius="5px" p={1}>
                  Ver más <ArrowDownIcon />
                </Text>
              </Flex>
              <Flex gap={1} flexDir="column">
                <Flex alignSelf="center" flexDir="column">
                  <Heading size="md">{MainTitle}</Heading>
                  <Text fontStyle="italic" fontSize={14}>
                    {destructureDate(n.Date.seconds)} - {MainSubtitle}
                  </Text>
                </Flex>
                <Divider w="50%" mx="auto" borderColor="gray.400" />
                <Flex w="100%" justify="space-between">
                  <Text alignSelf="center" maxW="75%">
                    {MainBody[0]}..
                  </Text>
                  <Flex align="flex-end" flexDir="column">
                    <Image
                      alt="card-alt"
                      src={MainIMG.downloadURL}
                      height={150}
                      width={150}
                      objectFit="contain"
                    />
                    <Text fontStyle="italic" fontSize={13}>
                      {MainImgFooter}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider borderColor="gray" />
              <Flex justify="center">                
                <ConfirmModal
                  Title="Eiminar Noticia"
                  buttonProps={EliminarNoticiaButtonProps}
                  handleClick={() =>
                    deleteNoticia(n.id, [CardIMG.filePath, MainIMG.filePath])
                  }
                  isLoading={loading}
                  ButtonText="Eliminar Noticia"
                >
                  <Text>
                    Estas seguro que deseas la Noticia{" "}
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

export default NoticiasList;
