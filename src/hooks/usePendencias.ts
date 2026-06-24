import { fetchPendencias, PendenciasResponse } from "@/services/pendenciasServices";
import { useEffect, useState } from "react";

export function usePendencias(visible: boolean) {
  const [data, setData] = useState<PendenciasResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (visible) {
      const load = async () => {
        setLoading(true);
        setError(null);
        try {
          const result = await fetchPendencias();
          setData(result);
        } catch (err) {
          setError(err instanceof Error ? err : new Error("Erro desconhecido"));
        } finally {
          setLoading(false);
        }
      };

      load();
    }
  }, [visible]);

  return { data, loading, error };
}
