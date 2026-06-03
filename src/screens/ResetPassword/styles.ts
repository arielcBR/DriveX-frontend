import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 24, 
    marginBottom: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 32,
  },
  textContainer: {
    alignItems: "center",
    gap: 4,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    color: colors["blue--300"],
    fontFamily: fonts.regular,
    fontSize: 14,
    textAlign: "center",
  },
  form: {
    gap: 16, 
  },
  buttonContainer: {
    gap: 16,
    marginTop: 8,
  },
  secondaryButton: {
    height: 56,
    backgroundColor: "rgba(28, 41, 62, 0.6)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: colors["blue--300"],
    fontFamily: fonts.medium,
    fontSize: 16,
  },
});