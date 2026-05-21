import { MaterialIconName } from "@/types/icons";
import { ProgressVariant } from "@/types/progress";

export interface SimpleLimitCardProps {
  label: string;
  currentValue: number;
  maxValue: number;
  iconName: MaterialIconName;
  variant: ProgressVariant;
  prefix?: string; 
}