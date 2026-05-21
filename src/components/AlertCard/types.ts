import { MaterialIcons } from "@expo/vector-icons";

export interface AlertItem {
    id: string;
    label: string;
    value: string;
    status: "warning" | "danger";
  }
  
export interface AlertProps {
    title: string;
    iconName: React.ComponentProps<typeof MaterialIcons>["name"];
    data: AlertItem[];
}