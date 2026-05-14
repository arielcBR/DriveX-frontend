import { useEffect, useState } from "react";
import { fetchHomeData } from "@/services/homeServices";
import { HomeData } from "@/types/home";

export function useHomeData() {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchHomeData()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}