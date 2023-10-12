import { CursosSedes, SoloSedes } from "@/data/CursosData";
import { getCollection } from "@/firebase/services/getCollection";
import { HeadersType, UserListed } from "@/types/types";
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
import { useEffect, useRef, useState } from "react";
import DeleteUserModal from "./DeleteUserModal";
import { useReactToPrint } from "react-to-print";
import destructureDate from "@/helpers/destructureDate";
const Inscripciones = () => {
  const [inscripciones, setInscripciones] = useState<UserListed[]>([]);
  const [totalInscriptos, setTotalInscriptos] = useState<any>([]);
  const [cursoFilter, setCursoFilter] = useState("");
  const [sedeFilter, setSedeFilter] = useState("");
  const [currentFilters, setCurrentFilters] = useState({ curso: "", sede: "" });
  const [keyReset, setKeyReset] = useState(0);
  const [filterBy, setFiltberBy] = useState<null | HeadersType>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: `Lista de Usuarios ${new Date()}`,
  });

  useEffect(() => {
    const fetchInscriptos = async () => {
      console.log("Fecthed");
      const gente = await getCollection("Inscriptos");
      setTotalInscriptos(gente);
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
              FechaInscripcion: c.fechaInscripcion
                ? destructureDate(c.fechaInscripcion.seconds)
                : "septiembre",
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
      setInscripciones(splitted);
    };
    fetchInscriptos();
  }, []);
  const filterInscriptos = (list: UserListed[]) => {
    let newList = [...list];
    if (cursoFilter)
      newList = newList.filter(
        (user: UserListed) => user.Curso === cursoFilter
      );
    if (sedeFilter)
      newList = newList.filter((user: UserListed) => user.Sede === sedeFilter);
    if (filterBy) {
      newList = newList.sort((a: UserListed, b: UserListed) => {
        return a[filterBy].localeCompare(b[filterBy]);
      });
    }
    return newList;
  };
  const Headers: (keyof UserListed)[] = [
    "Nombre",
    "Curso",
    "Sede",
    "Email",
    "DNI",
    "Telefono",
    "Domicilio",
    "FechaInscripcion",
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
  const deleteUser = (DNI: string, curso: string) => {
    const newInscriptos = inscripciones.filter(
      (user) => user.DNI !== DNI || user.Curso !== curso
    );
    setInscripciones(newInscriptos);
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
            {SoloSedes.map((sede) => {
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
          size="sm"
        >
          Aplicar filtros
        </Button>
        <Button
          maxW="200px"
          bg="brandLight"
          _hover={{ opacity: 0.8 }}
          color="white"
          onClick={limpiarFiltros}
          size="sm"
        >
          Limpiar Filtros
        </Button>
        <Button
          maxW="200px"
          bg="brandLight"
          _hover={{ opacity: 0.8 }}
          color="white"
          onClick={generatePDF}
          size="sm"
        >
          Imprimir/PDF
        </Button>
      </Flex>

      {inscripciones.length > 0 ? (
        <Flex flexDir="column" width="100%">
          <Flex flexDir="column" my={2}>
            <Text>
              <strong>Total Personas Inscriptas:</strong>{" "}
              {totalInscriptos.length}
            </Text>
            <Text>
              <strong>Total Inscripciones:</strong> {inscripciones.length}
            </Text>
          </Flex>
          <TableContainer
            width="100%"
            ref={tableRef}
            // sx={{
            //   "@media print": {
            //     transform: "rotate(90deg)",
            //   },
            // }}
          >
            <Table
              width="100%"
              size="sm"
              variant="striped"
              colorScheme="facebook"
            >
              {filterInscriptos(inscripciones).length === 0 && (
                <TableCaption>No se han encontrado resultados</TableCaption>
              )}
              <Thead>
                <Tr>
                  <Th
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                    }}
                  />
                  <Th
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                    }}
                  />
                  {Headers.map((param: HeadersType) => {
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
                {filterInscriptos(inscripciones).map((user, ind) => {
                  const { Nombre, Curso, DNI } = user;
                  return (
                    <Tr key={DNI + Curso}>
                      <Td
                        title="Eliminar"
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                        }}
                      >
                        <DeleteUserModal
                          username={Nombre}
                          curso={Curso}
                          DNI={DNI}
                          removeUser={() => deleteUser(DNI, Curso)}
                        />
                      </Td>
                      <Td
                        fontWeight="bold"
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                        }}
                      >
                        {ind + 1}
                      </Td>

                      {Headers.map((thisKey, i) => {
                        const value = user[thisKey];
                        return (
                          <Td
                            key={value + i}
                            sx={{
                              "@media print": {
                                fontSize: "10px",
                              },
                            }}
                          >
                            {value}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
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

export default Inscripciones;
