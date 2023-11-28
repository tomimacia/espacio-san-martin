import { getCollection } from "@/firebase/services/getCollection";
import destructureDate from "@/helpers/destructureDate";
import { HeadersTypeCoope, UserListedCoope } from "@/types/types";
import {
  Checkbox,
  Flex,
  Progress,
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
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import ArchivarUserCop from "./ArchivarUserCop";
import DeleteUserCop from "./DeleteUserCop";
const CooperativistasAdmin = () => {
  const [totalInscriptos, setTotalInscriptos] = useState<UserListedCoope[]>([]);
  const [showArchivados, setShowArchivados] = useState(false);
  const [filterBy, setFiltberBy] = useState<null | HeadersTypeCoope>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchInscriptos = async () => {
      console.log("Fecthed");
      const gente = await getCollection("Cooperativistas");
      const final = gente.map((p: any) => {
        return {
          ...p,
          FechaInscripcion: destructureDate(p.FechaInscripcion.seconds),
        };
      });
      setTotalInscriptos(final);
    };
    fetchInscriptos();
  }, []);
  const filterInscriptos = (list: UserListedCoope[]) => {
    let newList = [...list];

    newList = newList.filter(
      (user: UserListedCoope) => user.Archivado === showArchivados
    );

    if (filterBy) {
      newList = newList.sort((a: any, b: UserListedCoope) => {
        return a[filterBy].localeCompare(b[filterBy]);
      });
    }
    return newList;
  };
  const Headers: (keyof Omit<UserListedCoope, "Archivado">)[] = [
    "Nombre",
    "Email",
    "Cursos",
    "DNI",
    "Telefono",
    "Domicilio",
    "FechaInscripcion",
    "Turno",
  ];
  const deleteUser = (DNI: string) => {
    const newInscriptos = totalInscriptos.filter(
      (user: UserListedCoope) => user.DNI !== DNI
    );
    setTotalInscriptos(newInscriptos);
  };
  const archivarUser = (DNI: string) => {
    const newInscriptos = totalInscriptos.map((u: UserListedCoope) => {
      if (u.DNI === DNI) {
        return { ...u, Archivado: true };
      } else return u;
    });
    setTotalInscriptos(newInscriptos);
  };

  return (
    <Flex gap={[2, 4, 6, 8]} flexDir="column">
      <Checkbox
        isChecked={showArchivados}
        onChange={() => setShowArchivados((prev) => !prev)}
        borderColor="gray"
      >
        Mostrar archivados
      </Checkbox>
      {totalInscriptos.length > 0 ? (
        <Flex flexDir="column" width="100%">
          <Flex flexDir="column" my={2}>
            <Text>
              <strong>Total Personas Inscriptas:</strong>{" "}
              {filterInscriptos(totalInscriptos).length}
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
              {filterInscriptos(totalInscriptos).length === 0 && (
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
                  <Th
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                    }}
                  />
                  {Headers.map((param: HeadersTypeCoope) => {
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
                {filterInscriptos(totalInscriptos).map((user, ind) => {
                  const { Nombre, Cursos, DNI } = user;
                  return (
                    <Tr key={DNI + Cursos}>
                      <Td
                        title="Archivar"
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                        }}
                      >
                        {user.Archivado ? (
                          <MdOutlineAssignmentTurnedIn title="Archivado" />
                        ) : (
                          <ArchivarUserCop
                            username={Nombre}
                            curso={Cursos}
                            DNI={DNI}
                            removeUser={() => archivarUser(DNI)}
                          />
                        )}
                      </Td>
                      <Td
                        title="Eliminar"
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                        }}
                      >
                        <DeleteUserCop
                          username={Nombre}
                          DNI={DNI}
                          removeUser={() => deleteUser(DNI)}
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
                            key={value || "" + i}
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

export default CooperativistasAdmin;
