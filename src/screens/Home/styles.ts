import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 16,
    paddingBottom: 24,
  },
  greetingText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 22,
    marginTop: 8,
    marginBottom: 4,
  },
});