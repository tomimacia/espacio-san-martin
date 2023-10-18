import { getCollection } from "@/firebase/services/getCollection";
import { CursoTypeDB, NoticiaTypeDB } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { useSessionStorage } from "../storageHooks/useSessionStorage";

const useGetCursos = () => {
  const [cursos, setCursos] = useSessionStorage<CursoTypeDB[]>(
    "CURSOS_SESSION_STORAGE",
    []
  );
  const [loadingCursos, setLoadingCursos] = useState(false);

  const getCursos = useCallback(async () => {
    const cursosFetched = await getCollection("Cursos");
    setCursos(cursosFetched as any);
  }, [setCursos]);
  useEffect(() => {
    if (cursos.length > 0) return;
    setLoadingCursos(true);

    try {
      getCursos();
    } catch (err: any) {
      console.log("Error getting cursos", err);
    } finally {
      setLoadingCursos(false);
    }
  }, [cursos, setCursos, getCursos]);
  return { loadingCursos, setCursos, getCursos, cursos };
};

export default useGetCursos;
