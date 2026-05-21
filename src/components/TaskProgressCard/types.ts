import { MaterialIconName } from "@/types/icons";
import { ProgressVariant } from "@/types/progress";

export interface TaskProgressCardProps {
  title: string;
  subTitle: string;
  currentValue: number;
  maxValue: number;
  unit: string; 
  variant: ProgressVariant;
  iconName: MaterialIconName;
  status: "em andamento" | "concluída" | "atenção";
}