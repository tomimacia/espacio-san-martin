import { addSingleDoc } from "@/firebase/services/addSingleDoc";
import loadFile from "@/firebase/services/loadFile";
import { scrollIntoTheView } from "@/helpers/scrollIntoTheView";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Flex, FormControl, Heading } from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import AddImages from "../FormFields/AddImage";
import TextAreaSuper from "../FormFields/TextAreaSuper";
import TextInputSuper from "../FormFields/TextInputSuper";
import PreviewComponent from "../PreviewComponent";
import { useCustomToast } from "@/hooks/useCustomToast";
import { AnimatePresence, motion } from "framer-motion";
const NoticiaAddForm = ({ getNoticias }: { getNoticias: () => void }) => {
  const [showForm, setShowForm] = useState(false);

  const [cardImage, setCardImage] = useState<File | null>(null);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const CardList = [
    {
      name: "CardTitulo",
      title: "Titulo",
      helpText: "",
    },
  ];
  const MainList = [
    {
      name: "MainTitulo",
      title: "Titulo",
      helpText: "",
    },
    {
      name: "MainSubtitulo",
      title: "Subtitulo",
      helpText: "",
    },
    {
      name: "ImgFooter",
      title: "Pie de foto",
      helpText: "",
    },
  ];
  useEffect(() => {
    if (showForm) scrollIntoTheView("#FormIntroID");
  }, [showForm]);
  const { errorToast, successToast } = useCustomToast();
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (mainImage === null || cardImage === null) {
      setLoading(false);
      return errorToast("Faltan imágenes");
    }
    try {
      const form: HTMLFormElement | null = formRef.current;
      if (!form) {
        errorToast("Error inesperado");
        setLoading(false);
        return;
      }

      // Explicitly assert the types of the form fields
      const CardTitulo: HTMLInputElement = form.elements.namedItem(
        "CardTitulo"
      ) as HTMLInputElement;
      const CardIntroHTML: HTMLInputElement = form.elements.namedItem(
        "CardIntro"
      ) as HTMLInputElement;
      const MainTitulo: HTMLInputElement = form.elements.namedItem(
        "MainTitulo"
      ) as HTMLInputElement;
      const MainSubtitulo: HTMLInputElement = form.elements.namedItem(
        "MainSubtitulo"
      ) as HTMLInputElement;
      const MainBodyHTML: HTMLInputElement = form.elements.namedItem(
        "MainBody"
      ) as HTMLInputElement;
      const ImgFooter: HTMLInputElement = form.elements.namedItem(
        "ImgFooter"
      ) as HTMLInputElement;
      const CardTitle = CardTitulo.value;
      const CardIntro = CardIntroHTML.value.split("\n");
      const MainTitle = MainTitulo.value;
      const MainSubtitle = MainSubtitulo.value;
      const MainBody = MainBodyHTML.value.split("\n");
      const MainImgFooter = ImgFooter.value;
      if (
        !CardTitle ||
        !CardIntroHTML.value ||
        !MainTitle ||
        !MainSubtitle ||
        !MainBodyHTML.value ||
        !MainImgFooter
      ) {
        setLoading(false);
        return errorToast("Completa todos los campos");
      }

      const CardIMG = await loadFile(cardImage, "Noticias", MainTitulo.value);
      const MainIMG = await loadFile(mainImage, "Noticias", MainTitulo.value);

      const newNoticia = {
        Date: new Date(),
        Card: {
          CardTitle,
          CardIntro,
          CardIMG,
        },
        Main: {
          MainTitle,
          MainSubtitle,
          MainBody,
          MainImgFooter,
          MainIMG,
        },
      };
      await addSingleDoc("Noticias", newNoticia);
      getNoticias();
      setCardImage(null);
      setMainImage(null);
      setShowForm(false);
      scrollIntoTheView("#PanelNavID");
      successToast("Noticia agregada correctamente");
    } catch (err: any) {
      console.log("Error adding news", err.message);
      errorToast("Error cargando noticia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!showForm && (
        <Button
          w="155px"
          size="sm"
          display="inline"
          bg="brandLight"
          color="white"
          _hover={{ bg: "purple.200", color: "gray" }}
          onClick={() => {
            setShowForm(true);
          }}
          alignSelf="center"
          m={3}
        >
          Agregar Noticia <PlusSquareIcon mx={1} fontSize={20} />
        </Button>
      )}
      <AnimatePresence>
        {showForm && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ type: "tween" }}
          >
            <Flex maxW="1000px" p={1} flexDir="column">
              <Flex id="FormIntroID" />
              <FormControl>
                <form ref={formRef}>
                  <Flex flexDir="column">
                    <Heading size="lg">Intro</Heading>
                    <Flex gap={4} p={3} flexDir="column">
                      {CardList.map((card) => {
                        const { title, name, helpText } = card;
                        return (
                          <TextInputSuper
                            key={name}
                            title={title}
                            name={name}
                            helpText={helpText}
                          />
                        );
                      })}
                      <TextAreaSuper name="CardIntro" title="Intro" />
                      <AddImages
                        images={cardImage}
                        id="cardImage"
                        setImages={setCardImage}
                      />
                    </Flex>
                  </Flex>
                  <Flex flexDir="column">
                    <Heading size="lg">Principal</Heading>
                    <Flex gap={4} p={3} flexDir="column">
                      {MainList.map((card) => {
                        const { title, name, helpText } = card;
                        return (
                          <TextInputSuper
                            key={name}
                            title={title}
                            name={name}
                            helpText={helpText}
                          />
                        );
                      })}
                      <TextAreaSuper name="MainBody" title="Body" />

                      <AddImages
                        images={mainImage}
                        id="mainImage"
                        setImages={setMainImage}
                      />
                    </Flex>
                  </Flex>
                </form>
              </FormControl>
              <Flex justify="space-around">
                <Button
                  w="155px"
                  size="sm"
                  type="submit"
                  bg="brandLight"
                  color="white"
                  _hover={{ bg: "purple.200", color: "gray" }}
                  m={4}
                  onClick={onSubmit}
                  isLoading={loading}
                >
                  Cargar Noticia
                </Button>
                <Button
                  w="155px"
                  size="sm"
                  onClick={() => setShowForm(false)}
                  m={4}
                  border="1px solid red"
                  _hover={{ bg: "blackAlpha.200" }}
                >
                  Cancelar
                </Button>
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NoticiaAddForm;
