import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Flex, FormControl, Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import SedesList from "./SedesList";
import TextInputSuper from "../FormFields/TextInputSuper";
import { useCustomToast } from "@/hooks/useCustomToast";
import { addSingleDoc } from "@/firebase/services/addSingleDoc";
import { scrollIntoTheView } from "@/helpers/scrollIntoTheView";

const SedeAddForm = ({ getSedes }: { getSedes: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast } = useCustomToast();
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
  const inputList = ["Titulo", "Direccion", "Localidad", "Iframe"];

  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form: HTMLFormElement | null = formRef.current;
      if (!form) {
        errorToast("Error inesperado");
        setLoading(false);
        return;
      }
      const TituloElement: HTMLInputElement = form.elements.namedItem(
        "Titulo"
      ) as HTMLInputElement;
      const DireccionElement: HTMLInputElement = form.elements.namedItem(
        "Direccion"
      ) as HTMLInputElement;
      const LocalidadElement: HTMLInputElement = form.elements.namedItem(
        "Localidad"
      ) as HTMLInputElement;
      const IframeElement: HTMLInputElement = form.elements.namedItem(
        "Iframe"
      ) as HTMLInputElement;
      const Titulo = TituloElement.value;
      const Direccion = DireccionElement.value;
      const Localidad = LocalidadElement.value;
      const Iframe = IframeElement.value;
      if (!Titulo || !Direccion || !Localidad || !Iframe) {
        setLoading(false);
        return errorToast("Completa todos los campos");
      }
      const newSede = {
        Titulo,
        Direccion,
        Localidad,
        Iframe,
      };
      await addSingleDoc("Sedes", newSede);
      getSedes();
      setShowForm(false);
      scrollIntoTheView("#PanelNavID");
      successToast("Noticia agregada correctamente");
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (showForm) scrollIntoTheView("#FormIntroID");
  }, [showForm]);
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
          Agregar sede <PlusSquareIcon mx={1} fontSize={20} />
        </Button>
      )}
      <AnimatePresence mode="wait">
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
                    <Heading size="lg">Sede</Heading>
                    <Flex gap={4} p={3} flexDir="column">
                      {inputList.map((sede) => {
                        return (
                          <TextInputSuper key={sede} title={sede} name={sede} />
                        );
                      })}
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
                  Agregar sede
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

export default SedeAddForm;
