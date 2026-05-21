import { MaterialIconName } from "@/types/icons";

export interface SelectProps {
  labelText: string;
  iconName?: MaterialIconName;
  placeholder?: string;
  value?: string;
  options: string[];
  onSelect: (value: string) => void;
  disabled?: boolean;
}