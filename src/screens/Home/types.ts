export interface UserProps {
  initials: string;
  name: string;
}

export interface EarningsProps {
  gross: string;
  expenses: string;
  net: string;
}

export interface StatsProps {
  valuePerKm: string;
  profitPerHour: string;
  kmDriven: string;
}

export interface HoursWorkedProps {
  day: string;
  value: number;
  active: boolean;
}

export interface AlertProps {
  id: string;
  title: string;
  badgeText: string;
  badgeColor: string;
  dotColor: string;
}

export interface HomeDataProps {
  user: UserProps;
  earnings: EarningsProps;
  stats: StatsProps;
  hoursWorked: HoursWorkedProps[];
  alerts: AlertProps[];
}
