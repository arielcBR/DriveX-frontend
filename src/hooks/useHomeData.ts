import { fetchHomeData } from "@/services/homeServices";
import { HomeData } from "@/types/home";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export function useHomeData() {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = (silent = false) => {
    if (!silent) setLoading(true);
    fetchHomeData()
      .then((resultado) => setData(resultado))
      .catch((erro) => setError(erro))
      .finally(() => setLoading(false));
  };

  useFocusEffect(
    useCallback(() => {
      // Se já tem data, não utiliza tela de loading
      fetchData(data !== null);
    }, [data !== null]),
  );

  return { data, loading, error, refetch: fetchData };
}
