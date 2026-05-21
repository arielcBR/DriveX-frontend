import { useEffect, useState } from "react";
import { fetchHomeData } from "@/services/homeServices";
import { HomeData } from "@/types/home";

export function useHomeData(idUsuario: number) {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    fetchHomeData(idUsuario)
      .then((resultado) => setData(resultado))
      .catch((erro) => setError(erro))
      .finally(() => setLoading(false));
  }, [idUsuario]); 

  return { data, loading, error };
}