import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors["blue--900"],
    gap: 12,
    padding: 24,
  },
  emoji: {
    fontSize: 40,
  },
  message: {
    color: colors["white"],
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: colors["blue--600"],
    borderRadius: 8,
  },
  buttonText: {
    color: colors["white"],
    fontFamily: fonts.medium,
    fontSize: 14,
  },
});