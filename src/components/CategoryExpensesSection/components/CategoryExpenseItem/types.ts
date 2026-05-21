import { ProgressVariant } from "@/components/ProgressBar";
import { MaterialIcons } from "@expo/vector-icons";

export interface CategoryExpenseItemProps {
  label: string;
  amount: number;
  currentValue: number;
  maxValue: number;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  iconBgColor: string; 
  variant: ProgressVariant;
}