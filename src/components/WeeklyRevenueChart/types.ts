interface WeeklyData {
  label: string; 
  value: number;
  max: number;
  isActive?: boolean;
}

export interface WeeklyRevenueChartProps {
  title: string;
  period: Date; 
  data: WeeklyData[];
}