import {
  Box,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import nhe from "@/public/NuevosHorizontes.webp";
import Vecinal from "@/public/JuanBioCuerpo.jpg";
import ACaraDePerro from "@/public/ACaraDePerroRadio.jpg";
export const BioText = () => {
  const ImageSize = useBreakpointValue([450, 250, 350, 300]);
  const ImageSizeNHE = useBreakpointValue([500, 250, 410, 600]);
  return (
    <Flex display="block">
      <Text fontSize={{ base: 14, sm: 20 }}>
        <strong>
          Abogado - Especiliasta en Salud{" "}
          <Text as={NextLink} cursor="text" href="/SuperUser">
            Mental
          </Text>
        </strong>
        <br />
        <br />
        Juan Cruz San Martín nació el 24 de julio de 1985 en Lomas de Zamora,
        pero vivió toda su vida en Esteban Echeverría.
        <br />
        <br />
        Realizó la primaria en la EP N° 16 “Manuel Belgrano”, y en 1997 con
        continuidad pedagógica en la E.S. (polimodal en aquel entonces) n° 1
        “Naciones Unidas”. Exigente y estudioso adelantó un año su escolaridad
        primaria. Pero ese mismo logro le impidió ingresar en el secundario
        preestablecido, ya que las autoridades pedagógicas le indicaban realizar
        por segunda vez séptimo año por ser cronológicamente más joven.
        <br />
        <br />
        El polimodal lo realizó en el Instituto Senderos Azules de Monte Grande,
        y se graduó en 2002.
        <br />
        <br />
        De abogado se graduó en julio de 2013, en U.N.L.Z. En 2015 hizo lo
        propio pero en el Tramo de Formación Docente para Profesionales y
        Técnicos, en, ISFD y TN°35 de Monte Grande.
        <br />
        <br />
        Desde 2011, Juan Cruz es propietario y representante legal de la escuela
        de educación especial{" "}
        <Link
          as={NextLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://institutonhe.com/"
          color={useColorModeValue("blue", "blue.200")}
          _hover={{ textDecor: "underline" }}
        >
          Nuevos Horizontes Echeverrianos.
        </Link>
      </Text>
      <Box float="right">
        <Image
          style={{
            objectFit: "contain",
            objectPosition: "center",
            borderRadius: "10px",
            border: "1px solid rgba(175, 175, 175, 0.4)",
            padding: 1,
          }}
          alt="Nuevos-Horizontes"
          src={nhe.src}
          height={ImageSizeNHE}
          width={ImageSizeNHE}
        />
        <Text as={"span"} fontSize={[10, 12, 14, 15]} fontStyle="italic">
          {ImageSizeNHE! > 350 && "Ingreso al establecimiento"} Nuevos
          Horizontes Echeverrianos
        </Text>
      </Box>
      <Text fontSize={{ base: 14, sm: 20 }}>
        <br />
        <br />
        También, desde 2019 es titular de la cátedra “Política y Legislación
        Referida a la Discapacidad” 4to Año, trayecto (carrera) de educación
        especial ISFDyTN°35.
        <br />
        <br />
        Pero hablemos de Juan Cruz San Martín involucrado en la política local
        de su Esteban Echeverría: en 2017 fue PRE-CANDIDATO a 3ER CONCEJAL por
        Unidad Ciudadana enfrentándose a Fernando Gray. En aquella primera
        experiencia obtuvo 7300 votos, confirmados con la lista corta.
        <br />
        <br />
        En 2019 redobló la apuesta y se presentó como PRE-CANDIDATO a 1°
        CONCEJAL por el Frente de Todos. Nuevamente enfrentándose a Fernando
        Gray. En esa oportunidad, Fernando Gray, como presidente del PJ
        Bonaerense le impugnó los avales y listas.
        <br />
        <br />
        Ya en 2021, y a través de PARTICIPAR (Vecinalismo), Juan Cruz se
        presentó como PRE-CANDIDATO 2° Consejero Escolar enfrentando nuevamente
        a Fernando Gray. 2300 votos, contabilizó.
        <br />
        <br />
        Este 2023, su apuesta más fuerte: INTENTÓ ser PRE-CANDIDATO a INTENDENTE
        de Esteban Echeverría por el Frente de Todos, enfrentando a Fernando
        Gray, pero POR ALGUN MOTIVO QUE NO SE EXPLICA, no le dieron la
        oportunidad.
        <br />
      </Text>
      <Box m={1} float="right">
        <Image
          alt="Olla-vecinal-popular"
          src={Vecinal.src}
          height={ImageSize}
          width={ImageSize}
          style={{ borderRadius: "10px" }}
        />
        <Text as={"span"} fontSize={[10, 12, 14, 15]} fontStyle="italic">
          Monte Grande, Esteban Echeverría
        </Text>
      </Box>
      <Text fontSize={{ base: 14, sm: 20 }}>
        <br />
        Juan Cruz San Martín también hizo y es todo esto…
        <br />
        <br />
        En 2021 abrió y desarrollo el merendero “Belgrano” que continúa hasta la
        fecha. El proyecto inició con 10 jóvenes y culminó con 60 familias
        completas (promedio de 350 personas). El merendero presta servicio 3
        veces por semana y está ubicado en Faro Patagonia 600, Monte Grande.
        <br />
        <br />
        Desarrollo del merendero “Las Camelias”, en 2022, que brinda servicio a
        100 personas, 2 veces por semana. Está ubicado en Las Orquídeas esq. Los
        Claveles. Monte Grande.
        <br />
        <br />
        Asociación Civil “Abriendo Caminos” (ONG), que se encuentra en ESTAPA
        FUNDACIONAL. OBJETIVO: …” Propiciar y fomentar el desarrollo integral,
        cultural, intelectual y moral de los asociados y de cualquier persona en
        condiciones de vulnerabilidad que se acerque a la asociación a cuyo
        efecto habilitará instalaciones que permitan dicho fin, a través de los
        medios y recursos a su alcance, entre ellos centros de capacitación y
        contención permanentes y/o temporales. Brindar un servicio destinado a
        cubrir las necesidades primarias de las personas, proponiendo
        estrategias y/o andamiajes a estos fines. Promover y fomentar la
        contención infanto-juvenil. Y Otros “…
        <br />
        <br />
        También hay tiempo para el debate y la difusión de ideas…
        <br />
      </Text>
      <Box m={1} float="right">
        <Image
          alt="Olla-vecinal-popular"
          src={ACaraDePerro.src}
          height={ImageSize}
          width={ImageSize}
          style={{ borderRadius: "10px" }}
        />
        <Text as={"span"} fontSize={[10, 12, 14, 15]} fontStyle="italic">
          Radio A Cara de Perro
        </Text>
      </Box>
      <Text fontSize={{ base: 14, sm: 20 }}>
        <br />
        Entre 2016 y 2022 realizó el programa radial “A Cara de Perro” del que
        fue conductor. En A cara de Perro se daban a conocer noticias y se
        analizaba la actualidad política local y nacional. En A Cara de Perro,
        se ha entrevistado a Guillermo Moreno, Nicolás Rodriguez Saa, Marcelo
        Koenig, y al “Profe” Romero, entre otros.
        <br />
        <br />
        Con una audiencia de 5000 oyentes por viernes, A Cara de Perro se
        transmitió por la frecuencia AM 1520 “La Voz del Sur”. Si quieren
        escucharlo, está en Spotify.
      </Text>
    </Flex>
  );
};
