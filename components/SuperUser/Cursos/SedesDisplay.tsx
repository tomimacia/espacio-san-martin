import { updateSingleDoc } from "@/firebase/services/updateSingleDoc";
import useGetSedes from "@/hooks/dataHandler/useGetSedes";
import { useCustomToast } from "@/hooks/useCustomToast";
import { CursoSede, GetCursosHookType } from "@/types/types";
import {
  Accordion,
  Button,
  Checkbox,
  Flex,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import SedeAccordionItem from "./SedeAccordionItem";

const SedesDisplay = ({
  Sedes,
  id,
  CursosHook,
  CursoTitle,
}: {
  Sedes: CursoSede[];
  id: string;
  CursoTitle: string;
  CursosHook: GetCursosHookType;
}) => {
  const [showAvailSedes, setShowAvailSedes] = useState(false);
  const [selectedSedes, setSelectedSedes] = useState<string[]>([]);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const { sedes: SedesDB } = useGetSedes();
  const handleCheckbox = (e: any) => {
    if (selectedSedes.includes(e.target.value)) {
      let newArr = selectedSedes.filter((m) => m !== e.target.value);
      setSelectedSedes([...newArr]);
    } else {
      setSelectedSedes((prev) => [...prev, e.target.value]);
    }
  };
  const { errorToast, successToast } = useCustomToast();
  const { getCursos } = CursosHook;

  const updateSedes = async () => {
    setLoadingUpdate(true);
    if (!selectedSedes.length) {
      errorToast("Selecciona alguna sede");
      setLoadingUpdate(false);
      return;
    }
    try {
      const newSedes = [
        ...Sedes,
        ...selectedSedes.map((sede) => {
          return {
            Titulo: sede,
            Costo: [],
            FechaInicio: null,
            Duracion: null,
            Grupowhatsapp: null,
            IsAvailable: false,
          };
        }),
      ];
      await updateSingleDoc("Cursos", id, {
        Sedes: newSedes,
      });
      getCursos();
      setShowAvailSedes(false);
      successToast("Sedes actualizadas correctamente!");
    } catch (err: any) {
      console.log("Error updating curso", err.message);
    } finally {
      setLoadingUpdate(false);
    }
  };
  const updateCursoSedes = async (newData: CursoSede) => {
    try {
      const newSedes = [...Sedes].filter((s) => s.Titulo !== newData.Titulo);
      await updateSingleDoc("Cursos", id, {
        Sedes: [...newSedes, newData],
      });
      getCursos();
      successToast("Sedes actualizadas correctamente!");
    } catch (e: any) {
      console.log("Error updating sede", e.message);
    }
  };
  const deleteSede = async (thisSede: string) => {
    setLoadingUpdate(true);
    try {
      const newSedes = [...Sedes.filter((sede) => sede.Titulo !== thisSede)];
      await updateSingleDoc("Cursos", id, {
        Sedes: newSedes,
      });
      getCursos();
      setShowAvailSedes(false);
      successToast("Sedes actualizadas correctamente!");
    } catch (err: any) {
      console.log("Error updating sedes", err.message);
    } finally {
      setLoadingUpdate(false);
    }
  };
  return (
    <Flex flexDir="column">
      <Heading size="lg">Sedes</Heading>
      <Flex p={2} flexDir="column" borderRadius="5px" border="1px solid black">
        <Flex flexDir="column">
          {!loadingUpdate ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  showAvailSedes ? "showingAvailSedes" : "notShowingAvailSedes"
                }
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                {!showAvailSedes && (
                  <Flex flexDir="column">
                    {Sedes.length > 0 ? (
                      <Accordion allowToggle>
                        {Sedes.map((s) => {
                          return (
                            <SedeAccordionItem
                              key={s.Titulo + CursoTitle}
                              sede={s}
                              CursoTitle={CursoTitle}
                              confirmModalClick={() => {
                                deleteSede(s.Titulo);
                                setShowAvailSedes(false);
                                setSelectedSedes([]);
                              }}
                              updateCursoSedes={updateCursoSedes}
                            />
                          );
                        })}
                      </Accordion>
                    ) : (
                      <Text fontWeight="bold">No hay sedes aún</Text>
                    )}

                    <Button
                      m={3}
                      size="xs"
                      bg="brandLight"
                      color="white"
                      w="200px"
                      _hover={{ opacity: 0.7 }}
                      onClick={() => setShowAvailSedes(true)}
                    >
                      Agregar Sede
                    </Button>
                  </Flex>
                )}
                {showAvailSedes && (
                  <Flex flexDir="column">
                    <Flex gap={3} flexWrap="wrap">
                      {SedesDB.filter(
                        (AllSedes) =>
                          !Sedes.some((sede) => sede.Titulo === AllSedes.Titulo)
                      ).map((SedeDB) => {
                        const { Titulo } = SedeDB;
                        return (
                          <Checkbox
                            isChecked={selectedSedes.includes(Titulo)}
                            value={Titulo}
                            onChange={handleCheckbox}
                            borderColor="gray"
                            key={"SedeList" + Titulo}
                          >
                            {Titulo}
                          </Checkbox>
                        );
                      })}
                    </Flex>

                    <Flex justify="center">
                      <Button
                        m={1}
                        size="xs"
                        bg="blackAlpha.300"
                        alignSelf="center"
                        border="1px solid gray"
                        w="200px"
                        _hover={{ opacity: 0.7 }}
                        onClick={updateSedes}
                      >
                        Agregar
                      </Button>
                      <Button
                        m={1}
                        size="xs"
                        bg="blackAlpha.300"
                        alignSelf="center"
                        border="1px solid gray"
                        w="200px"
                        _hover={{ opacity: 0.7 }}
                        onClick={() => {
                          setShowAvailSedes(false);
                          setSelectedSedes([]);
                        }}
                      >
                        Cancelar
                      </Button>
                    </Flex>
                  </Flex>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <Progress
              h={2}
              colorScheme="purple"
              bg="transparent"
              w="100%"
              isIndeterminate
              zIndex={100}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SedesDisplay;
