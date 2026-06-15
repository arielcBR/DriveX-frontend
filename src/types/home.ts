import { CostResponse } from "@/screens/Home/components/AlertsCard/types";

export type HomeUser = {
  id: number;
  initials: string;
  name: string;
};

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
  goals: any[];
  user: HomeUser;
  earnings: HomeEarnings;
  stats: HomeStats;
  hoursWorked: HomeHoursWorked[];
  alerts: CostResponse[]; 
};