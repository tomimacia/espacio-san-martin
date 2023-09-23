import { CursosSedes } from "@/data/CursosData";
import { getCollection } from "@/firebase/services/getCollection";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Progress,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [inscriptos, setInscriptos] = useState<any>([]);
  const [cursoFilter, setCursoFilter] = useState("");
  const [sedeFilter, setSedeFilter] = useState("");
  const [currentFilters, setCurrentFilters] = useState({ curso: "", sede: "" });
  const [keyReset, setKeyReset] = useState(0);
  const [filterBy, setFiltberBy] = useState<null | string>(null);
  useEffect(() => {
    const fetchInscriptos = async () => {
      console.log("Fecthed");
      const gente = await getCollection("Inscriptos");
      const splitted = gente
        .map((p: any) => {
          const {
            Cursos,
            DNI,
            Domicilio,
            Email,
            Nacimiento,
            Nombre,
            Telefono,
          } = p;
          const newElement = Cursos.map((c: any) => {
            return {
              Curso: c.titulo,
              Sede: c.sede,
              DNI: DNI,
              Domicilio: Domicilio,
              Email: Email,
              Nacimiento: Nacimiento,
              Nombre: Nombre,
              Telefono: Telefono,
            };
          });
          return [...newElement];
        })
        .flat();
      setInscriptos(splitted);
    };
    fetchInscriptos();
  }, []);
  const sedes = [
    "Zaizar",
    "Las Manitos",
    "Serra de guasayan",
    "Chacritas",
    "Córdoba",
    "Chacabuco",
  ];
  const filterInscriptos = (list: any) => {
    let newList = [...list];
    if (cursoFilter)
      newList = newList.filter((user: any) => user.Curso === cursoFilter);
    if (sedeFilter)
      newList = newList.filter((user: any) => user.Sede === sedeFilter);
    if (filterBy) {
      newList = newList.sort((a, b) => {
        return a[filterBy].localeCompare(b[filterBy]);
      });
    }
    return newList;
  };
  const Headers = [
    "Nombre",
    "Curso",
    "Sede",
    "Email",
    "Nacimiento",
    "DNI",
    "Telefono",
    "Domicilio",
  ];
  const aplicarFiltros = () => {
    setCursoFilter(currentFilters.curso);
    setSedeFilter(currentFilters.sede);
  };
  const limpiarFiltros = () => {
    setCurrentFilters({ sede: "", curso: "" });
    setFiltberBy(null);
    setCursoFilter("");
    setSedeFilter("");
    setKeyReset((prev) => prev + 1);
  };
  return (
    <Flex gap={[2, 4, 6, 8]} flexDir="column">
      <Heading size="md">Filtros</Heading>
      <Flex gap={[2, 4, 6, 10]}>
        <Flex
          border="1px solid gray"
          p={[1, 2]}
          borderRadius="5px"
          flexDir="column"
          gap={[1, 2]}
        >
          <Text>Curso</Text>
          <Divider />
          <Select
            size={["sm", "sm", "md"]}
            onChange={(e) =>
              setCurrentFilters((prev) => ({ ...prev, curso: e.target.value }))
            }
            placeholder="Seleccionar un Curso"
            border="1px solid gray"
            key={keyReset}
            borderRadius="5px"
          >
            {CursosSedes.map((curso) => {
              return <option key={curso.title}>{curso.title}</option>;
            })}
          </Select>
        </Flex>
        <Flex
          border="1px solid gray"
          p={[1, 2]}
          borderRadius="5px"
          flexDir="column"
          gap={[1, 2]}
        >
          <Text>Sede</Text>
          <Divider />
          <Select
            size={["sm", "sm", "md"]}
            onChange={(e) =>
              setCurrentFilters((prev) => ({ ...prev, sede: e.target.value }))
            }
            placeholder="Seleccionar una sede"
            border="1px solid gray"
            key={keyReset * 17}
            borderRadius="5px"
          >
            {sedes.map((sede) => {
              return <option key={sede}>{sede}</option>;
            })}
          </Select>
        </Flex>
      </Flex>
      <Flex gap={5}>
        <Button
          maxW="200px"
          bg="brandLight"
          _hover={{ opacity: 0.8 }}
          color="white"
          onClick={aplicarFiltros}
          size={["sm", "sm", "md"]}
        >
          Aplicar filtros
        </Button>
        <Button
          maxW="200px"
          bg="brandLight"
          _hover={{ opacity: 0.8 }}
          color="white"
          onClick={limpiarFiltros}
          size={["sm", "sm", "md"]}
        >
          Limpiar Filtros
        </Button>
      </Flex>
      {inscriptos.length > 0 ? (
        <TableContainer>
          <Table size="sm" variant="striped" colorScheme="facebook">
            {filterInscriptos(inscriptos).length === 0 && (
              <TableCaption>No se han encontrado resultados</TableCaption>
            )}
            <Thead>
              <Tr>
                {Headers.map((param) => {
                  return (
                    <Th
                      key={param}
                      cursor="pointer"
                      _hover={{ textDecor: "underline" }}
                      onClick={() => setFiltberBy(param)}
                    >
                      {param}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {filterInscriptos(inscriptos).map((user, ind) => {
                return (
                  <Tr key={user + ind}>
                    {Headers.map((thisKey, i) => {
                      const value = user[thisKey];
                      return <Td key={value + i}>{value}</Td>;
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
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
  );
};

export default UserTable;
