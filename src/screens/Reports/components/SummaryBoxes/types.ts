export interface SummaryBoxesProps {
  data: {
    totalManutencoesPreventivas: number;
    totalManutencoesCorretivas: number;
    valorTotalPreventivas: number;
  } | null;
  proximaRevisao: number;
}