import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";

export interface GoalCardProps {
  icon: ComponentProps<typeof MaterialIcons>["name"];
  title: string;
  subtitle: string;
  progress: number;
  current: string;
  target: string;
  color: string;
}

export interface GoalsSectionProps {
  goals: any[];
}