import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  textContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors["blue--300"],
  },
  errorText: {
    color: colors["red--500"],
    fontFamily: fonts.medium,
    fontSize: 14,
    textAlign: "center",
  },
  form: {
    width: "100%",
    gap: 16,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 16,
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: colors["blue--700"],
    borderRadius: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: colors["blue--300"],
    fontFamily: fonts.bold,
  },
});