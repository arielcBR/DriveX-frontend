import { ProgressVariant } from "@/types/progress";

export interface ProgressGroupProps {
  label: string;
  currentValue: number;
  maxValue: number;
  variant: ProgressVariant;
}