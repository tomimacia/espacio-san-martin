import { getCollection } from "@/firebase/services/getCollection";
import { NoticiaTypeDB } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { useSessionStorage } from "../storageHooks/useSessionStorage";

const useGetNoticias = () => {
  const [noticias, setNoticias] = useSessionStorage<NoticiaTypeDB[]>(
    "NOTICIAS_SESSION_STORAGE",
    []
  );
  const [loadingNoticias, setLoadingNoticias] = useState(false);

  const getNoticias = useCallback(async () => {
    const noticiasFetched = await getCollection("Noticias");
    setNoticias(noticiasFetched as any);
  }, [setNoticias]);
  useEffect(() => {
    if (noticias.length > 0) return;
    setLoadingNoticias(true);

    try {
      getNoticias();
    } catch (err: any) {
      console.log("Error getting news", err);
    } finally {
      setLoadingNoticias(false);
    }
  }, [noticias, setNoticias, getNoticias]);
  return { loadingNoticias, setNoticias, getNoticias, noticias };
};

export default useGetNoticias;
