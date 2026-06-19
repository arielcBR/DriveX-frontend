import { fetchHomeData } from "@/services/homeServices";
import { HomeData } from "@/types/home";
import { useEffect, useState } from "react";

export function useHomeData() {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = () => {
    setLoading(true);
    fetchHomeData()
      .then((resultado) => setData(resultado))
      .catch((erro) => setError(erro))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}