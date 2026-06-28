import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { 
  getInformacoesManutencao, 
  getPendenciasUsuario,
  getManutencoes,
  InformacoesManutencaoVeiculoResponse,
  PendenciasDoUsuarioResponse,
  ManutencaoResponse,
  Page
} from "@/services/reportsServices";

export function useReportsData() {
  const [infoManutencao, setInfoManutencao] = useState<InformacoesManutencaoVeiculoResponse | null>(null);
  const [pendencias, setPendencias] = useState<PendenciasDoUsuarioResponse | null>(null);
  const [manutencoes, setManutencoes] = useState<Page<ManutencaoResponse> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const [info, pend, manut] = await Promise.all([
        getInformacoesManutencao(),
        getPendenciasUsuario(),
        getManutencoes(0, 5) // fetch first 5 recent maintenances
      ]);
      setInfoManutencao(info);
      setPendencias(pend);
      setManutencoes(manut);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData(infoManutencao !== null);
    }, [infoManutencao !== null])
  );

  return { infoManutencao, pendencias, manutencoes, loading, error, refetch: fetchData };
}
