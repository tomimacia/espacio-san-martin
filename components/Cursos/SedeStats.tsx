import { CursoSede } from "@/types/types";
import { Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LinkAndIcon } from "../Contaco/Items/LinkAndIcon";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const SedeStats = ({ sede }: { sede: CursoSede }) => {
  const { Duracion, FechaInicio, Titulo, Grupowhatsapp } = sede;
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} key={Titulo}>
      <Flex
        flexDir="column"
        m={3}
        minH="120px"
        p={2}
        borderRadius="7px"
        border="1px solid gray"
      >
        <Text>
          Duración: <strong>{Duracion || "Sin definir"}</strong>
        </Text>
        <Text>
          Fecha de inicio: <strong>{FechaInicio || "Sin definir"}</strong>
        </Text>
        {Grupowhatsapp && Grupowhatsapp !== "Sin definir" && (
          <LinkAndIcon
            href={Grupowhatsapp || ""}
            title="Únete al grupo de WhatsApp!"
          >
            <AiOutlineWhatsApp color="#25D366" />
          </LinkAndIcon>
        )}
      </Flex>
    </motion.div>
  );
};

export default SedeStats;
