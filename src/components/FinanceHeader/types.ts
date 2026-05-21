export type FilterType = 'Hoje' | 'Semana' | 'Mês';

export interface FinanceHeaderProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}