import { fetchHomeData } from "@/services/homeServices";
import { HomeData } from "@/types/home";
import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";

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
      // If we already have data, fetch silently so we don't flash the loading spinner
      fetchData(data !== null);
    }, [data !== null])
  );

  return { data, loading, error, refetch: fetchData };
}