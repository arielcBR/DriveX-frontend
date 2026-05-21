// types/home.ts (ou o arquivo onde essas tipagens globais estão)

// Importamos a tipagem real que o backend devolve e o componente espera
import { CostResponse } from "@/screens/Home/components/AlertsCard/types";

export type HomeUser = {
  id: number;
  initials: string;
  name: string;
};

// Atualizado para aceitar number | string, espelhando o EarningsCard
export type HomeEarnings = {
  gross?: number | string;
  expenses?: number | string;
  net?: number | string;
};

export type HomeStats = {
  valuePerKm: string;
  profitPerHour: string;
  kmDriven: string;
};

export type HomeHoursWorked = {
  day: string;
  value: number;
  active: boolean;
};

export type HomeData = {
  user: HomeUser;
  earnings: HomeEarnings;
  stats: HomeStats;
  hoursWorked: HomeHoursWorked[];
  alerts: CostResponse[]; 
};