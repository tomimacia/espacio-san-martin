import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdDirectionsCarFilled, MdLocationOn } from "react-icons/md";
import { Mapa } from "./Mapa";
import { useWaitAction } from "@/hooks/useWaitAction";
import { sedeType } from "@/types/types";

const Ubicación = () => {
  const [currentLocation, setCurrentLocation] = useState({
    sede: "Las Manitos",
    direccion: "Presbiterio Orencio Antonio Mainer 45",
    localidad: "Monte Grande, Provincia de Buenos Aires",
    iframe:
      "embed?pb=!1m18!1m12!1m3!1d3276.771853412792!2d-58.49442172504!3d-34.786518367173926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1c72dc86cf7%3A0x4e9178a7df82e60d!2sPresbiterio%20Orencio%20Antonio%20Mainer%2045%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694213750406!5m2!1sen!2sar",
  });
  const SEDES = [
    {
      sede: "Las Manitos",
      direccion: "Presbiterio Orencio Antonio Mainer 45",
      localidad: "Monte Grande, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d3276.771853412792!2d-58.49442172504!3d-34.786518367173926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1c72dc86cf7%3A0x4e9178a7df82e60d!2sPresbiterio%20Orencio%20Antonio%20Mainer%2045%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694213750406!5m2!1sen!2sar",
    },
    {
      sede: "Zaizar",
      direccion: "Avenida Luis Vernet 4091",
      localidad: "9 de Abril, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d3277.058130580385!2d-58.49474962504039!3d-34.77931186679146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1c4a3de5e2d%3A0x46e877202d7f9f6!2sAv.%20Luis%20Vernet%204091%2C%20B1839IIC%209%20de%20Abril%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694214172276!5m2!1sen!2sar",
    },
    {
      sede: "Dorrego",
      direccion: "Coronel Dorrego 1053",
      localidad: "Monte Grande, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d3275.1841280626554!2d-58.4664168250377!3d-34.82646276929461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd158bd632037%3A0x949b21cce4938ff6!2sCnel.%20Dorrego%201053%2C%20B1842AWV%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694213954926!5m2!1sen!2sar",
    },
    {
      sede: "Club Camioneros",
      direccion: "Camino de Cintura 6400 6598",
      localidad: "9 de Abril, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d2065.101881277877!2d-58.488683998355256!3d-34.751944863304665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcce3e7a11e729%3A0xfa92594ee27c2143!2sClub%20Camioneros%20-%20Predio%20Camino%20de%20Cintura!5e0!3m2!1ses!2sar!4v1695927924759!5m2!1ses!2sar",
    },
    {
      sede: "Sierra de Guasayan",
      direccion: "Sierra de Guasayán 298",
      localidad: "9 de Abril, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d3277.1287994712284!2d-58.496361525277216!3d-34.77753270676991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1db5f282ed7%3A0x6da8c4249ba2dc28!2sSierra%20de%20Guasay%C3%A1n%20298%2C%20B1839BGF%209%20de%20Abril%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694214337319!5m2!1sen!2sar",
    },

    {
      sede: "Chacritas",
      direccion: "Tres Arroyos 1880",
      localidad: "Monte Grande, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d1299.3068008947382!2d-58.45831014038619!3d-34.855026316740556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd41ecf14d927%3A0x2f358fe346e4cf53!2sTres%20Arroyos%201880%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694214406915!5m2!1sen!2sar",
    },

    {
      sede: "Córdoba",
      direccion: "Cordoba 371",
      localidad: "Monte Grande, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d3275.1428957394514!2d-58.45571582503762!3d-34.82749956934964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3facce21329%3A0xccf5505403329612!2sCordoba%20371%2C%20B1842COI%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694214443866!5m2!1sen!2sar",
    },

    {
      sede: "Chacabuco",
      direccion: "Chacabuco 1573",
      localidad: "Luis Guillon, Provincia de Buenos Aires",
      iframe:
        "embed?pb=!1m18!1m12!1m3!1d3275.499915067253!2d-58.44401912526405!3d-34.81852130891361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3935a032a03%3A0x3f5a465ee0ad1b88!2sChacabuco%201573%2C%20B1838ASK%20Luis%20Guillon%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1694214495111!5m2!1sen!2sar",
    },
  ];
  const { isAvail, setIsAvail } = useWaitAction();
  const handleLocation = (sede: sedeType) => {
    if (isAvail) {
      setCurrentLocation(sede);
      setIsAvail(false);
    }
  };
  return (
    <Box>
      <Heading
        gap={1}
        alignItems="center"
        display="inline-flex"
        fontWeight="medium"
        size={"xl"}
        mb={2}
      >
        <MdDirectionsCarFilled /> Cómo llegar
      </Heading>

      <Flex flexDir="column" gap={7} pt={5}>
        <Flex flexDir="column" gap={2}>
          <Heading
            alignItems="center"
            mb={2}
            gap={1}
            size="lg"
            display="inline-flex"
            fontWeight="medium"
          >
            <MdLocationOn />
            Nuestras sedes
          </Heading>

          <Flex gap={[1, 2, 4, 6]} flexWrap="wrap">
            {SEDES.map((sede) => {
              return (
                <Button
                  key={sede.sede}
                  onClick={() => handleLocation(sede)}
                  size="sm"
                  bg="brandLight"
                  color="white"
                  _hover={{ opacity: 0.8 }}
                >
                  <Text fontFamily="montserrat">{sede.sede}</Text>
                </Button>
              );
            })}
          </Flex>
        </Flex>

        <Mapa location={currentLocation} />
      </Flex>
    </Box>
  );
};

export default Ubicación;
