export type UrgencyLevel = 'high' | 'medium' | 'low';

export interface CostResponse {
  costId: number;
  description: string;
  dueDate?: string;
  amount: number;
  type: string;
}

export interface ProcessedAlert extends CostResponse {
  daysRemaining: number | null;
  statusText: string;
  urgency: UrgencyLevel;
}

export interface AlertsCardProps {
  alertsData: CostResponse[];
}