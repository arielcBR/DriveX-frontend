export interface HoursWorkedProps {
  day: string;
  value: number;
  active: boolean;
}

export interface ChartCardProps {
  hoursWorked: HoursWorkedProps[];
}