export interface CategoryData {
  id: string;
  label: string;
  amount: number;
  maxValue: number;
  iconName: any;
  iconBgColor: string;
  variant: any;
}

export interface Props {
  data: CategoryData[];
}