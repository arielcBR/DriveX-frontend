import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    gap: 2,
  },
  greetingText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 17,
    marginBottom: 12,
  },
});