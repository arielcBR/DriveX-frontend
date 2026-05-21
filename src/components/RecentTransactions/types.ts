import { MaterialIconName } from '../../types/icons';

export interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: 'income' | 'outcome';
  iconName: MaterialIconName;
  iconColor: string;
}

export interface RecentTransactionsProps {
  data: Transaction[];
  onViewAll?: () => void;
}