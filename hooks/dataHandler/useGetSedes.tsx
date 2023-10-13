import { getCollection } from "@/firebase/services/getCollection";
import { SedeTypeDB } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { useSessionStorage } from "../storageHooks/useSessionStorage";

const useGetSedes = () => {
  const [sedes, setSedes] = useSessionStorage<SedeTypeDB[]>(
    "SEDES_SESSION_STORAGE",
    []
  );
  const [loadingSedes, setLoadingSedes] = useState(false);

  const getSedes = useCallback(async () => {
    const sedesFetched = await getCollection("Sedes");
    setSedes(sedesFetched as any);
  }, [setSedes]);
  useEffect(() => {
    if (sedes.length > 0) return;
    setLoadingSedes(true);

    try {
      getSedes();
    } catch (err: any) {
      console.log("Error getting sedes", err);
    } finally {
      setLoadingSedes(false);
    }
  }, [sedes, setSedes, getSedes]);
  return { loadingSedes, setSedes, getSedes, sedes };
};

export default useGetSedes;
