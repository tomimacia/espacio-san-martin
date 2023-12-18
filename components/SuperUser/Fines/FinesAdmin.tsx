import { getCollection } from "@/firebase/services/getCollection";
import destructureDate from "@/helpers/destructureDate";
import { HeadersTypeFines, UserListedFines } from "@/types/types";
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
import ArchivarUser from "../Cooperativistas/ArchivarUser";
import DeleteUser from "../Cooperativistas/DeleteUser";
const FinesAdmin = () => {
  const [totalInscriptos, setTotalInscriptos] = useState<UserListedFines[]>([]);
  const [showArchivados, setShowArchivados] = useState(false);
  const [filterBy, setFiltberBy] = useState<null | HeadersTypeFines>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchInscriptos = async () => {
      console.log("Fecthed");
      const gente = await getCollection("Fines");
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
  const filterInscriptos = (list: UserListedFines[]) => {
    let newList = [...list];

    newList = newList.filter(
      (user: UserListedFines) => user.Archivado === showArchivados
    );

    if (filterBy) {
      newList = newList.sort((a: any, b: UserListedFines) => {
        return a[filterBy].localeCompare(b[filterBy]);
      });
    }
    return newList;
  };
  const Headers: (keyof Omit<UserListedFines, "Archivado">)[] = [
    "Nombre",
    "Email",
    "Sede",
    "DNI",
    "Telefono",
    "Domicilio",
    "FechaInscripcion",
    "Genero",
    "DondeDejaste",
  ];
  const deleteUser = (DNI: string) => {
    const newInscriptos = totalInscriptos.filter(
      (user: UserListedFines) => user.DNI !== DNI
    );
    setTotalInscriptos(newInscriptos);
  };
  const archivarUser = (DNI: string) => {
    const newInscriptos = totalInscriptos.map((u: UserListedFines) => {
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
                  {Headers.map((param: HeadersTypeFines) => {
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
                  const { Nombre, Sede, DNI } = user;
                  return (
                    <Tr key={DNI + Sede}>
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
                          <ArchivarUser
                            username={Nombre}
                            DNI={DNI}
                            collection="Fines"
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
                        <DeleteUser
                          username={Nombre}
                          DNI={DNI}
                          collection="Fines"
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

export default FinesAdmin;
