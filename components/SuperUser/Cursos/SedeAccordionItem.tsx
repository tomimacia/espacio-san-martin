import ConfirmModal from "@/components/ConfirmModal";
import { CursoSede } from "@/types/types";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import EditableInputComponent from "../FormFields/EditableInput";
import IsAvailableInput from "../FormFields/IsAvailableInput";
import { useCustomToast } from "@/hooks/useCustomToast";

const SedeAccordionItem = ({
  sede,
  confirmModalClick,
  CursoTitle,
  updateCursoSedes,
}: {
  sede: CursoSede;
  CursoTitle: string;
  confirmModalClick: () => void;
  updateCursoSedes: (newData: CursoSede) => Promise<void>;
}) => {
  const { Titulo, FechaInicio, Duracion, IsAvailable, Costo, Grupowhatsapp } =
    sede;
  const accordionRef = useRef<HTMLFormElement | null>(null);
  const [keyNumber, setKeyNumber] = useState(1);
  const [checkedAvail, setCheckedAvail] = useState(IsAvailable);
  const { errorToast } = useCustomToast();
  const [applyLoading, setApplyLoading] = useState(false);
  const applyChanges = async () => {
    if (isDisabled()) {
      return errorToast("Cambia algún parámetro para guardar");
    }
    const formRef = accordionRef?.current;
    if (!formRef) {
      return errorToast("Error actualizando, intenta de nuevoF");
    }
    setApplyLoading(true);
    const FechaInicioRef = formRef?.FechaInicio?.value;
    const DuracionRef = formRef?.Duracion?.value;
    const GrupowhatsappRef = formRef?.Grupowhatsapp?.value;
    const CostoRef = formRef?.Costo?.value;
    const newData = {
      Titulo,
      FechaInicio: FechaInicioRef,
      Duracion: DuracionRef,
      IsAvailable: checkedAvail,
      Costo: CostoRef.split("--"),
      Grupowhatsapp: GrupowhatsappRef,
    };
    try {
      await updateCursoSedes(newData);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setApplyLoading(false);
    }
  };
  const isDisabled = () => {
    const FechaInicioValue = FechaInicio || "Sin definir";
    const DuracionValue = Duracion || "Sin definir";
    const GrupowhatsappValue = Grupowhatsapp || "Sin definir";
    const CostoValue = Costo.length > 0 ? Costo.join("--") : "Sin definir";

    const formRef = accordionRef?.current;
    const FechaInicioRef = formRef?.FechaInicio?.value;
    const DuracionRef = formRef?.Duracion?.value;
    const GrupowhatsappRef = formRef?.Grupowhatsapp?.value;
    const CostoRef = formRef?.Costo?.value;
    return (
      FechaInicioValue === FechaInicioRef &&
      DuracionValue === DuracionRef &&
      GrupowhatsappValue === GrupowhatsappRef &&
      checkedAvail === IsAvailable &&
      CostoValue === CostoRef
    );
  };

  const toMap = [
    { Title: "Fecha de Inicio", Name: "FechaInicio", Value: FechaInicio },
    { Title: "Duracion", Name: "Duracion", Value: Duracion },
    {
      Title: "Grupo de WhastApp",
      Name: "Grupowhatsapp",
      Value: Grupowhatsapp,
    },
    {
      Title: "Costo",
      Name: "Costo",
      Value: Costo.join("--"),
    },
  ];
  const EliminarSedeButtonProps = {
    m: 1,
    size: "xs",
    bg: "blackAlpha.300",
    alignSelf: "center",
    border: "1px solid gray",
    minW: "100px",
    _hover: { opacity: 0.7 },
    isDisabled: isDisabled(),
    isLoading: applyLoading,
  };
  return (
    <AccordionItem my={0.5} key={Titulo + "list"} border="1px solid gray">
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <strong>{Titulo}</strong>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <form ref={accordionRef}>
          <IsAvailableInput
            state={checkedAvail}
            setState={setCheckedAvail}
            Title="Esta disponible"
          />
          {toMap.map((p, ind) => {
            const { Title, Value, Name } = p;
            return (
              <EditableInputComponent
                Title={Title}
                name={Name}
                refreshKey={() => setKeyNumber((prev) => prev + 1)}
                startValue={Value || "Sin definir"}
                key={"tmap" + ind}
              />
            );
          })}
          <Text my={[1, 2, 3, 5]}>
            <strong>Importante</strong>: Para subir más de un costo, separar con
            &quot;--&quot; entre cada costo. <strong>Ejemplo</strong>: Opcion 1
            $2000--Opcion 2 $7000 más ayuda en la 1 vez por semana.
          </Text>
          <Flex justify="center">
            <Button
              key={keyNumber + 17}
              {...EliminarSedeButtonProps}
              onClick={applyChanges}
            >
              Aplicar
            </Button>
            <ConfirmModal
              Title="Eiminar Sede"
              buttonProps={{ ...EliminarSedeButtonProps, isDisabled: false }}
              handleClick={confirmModalClick}
              ButtonText="Eliminar sede"
            >
              <Text>
                Estás seguro que deseas eliminar la Sede de{" "}
                <strong>{Titulo}</strong> del Curso de{" "}
                <strong>{CursoTitle}</strong>?
              </Text>
            </ConfirmModal>
          </Flex>
        </form>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SedeAccordionItem;
