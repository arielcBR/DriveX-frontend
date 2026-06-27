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
  emailHighlight: {
    color: colors["green--500"],
    fontFamily: fonts.bold,
    fontSize: 14,
    textAlign: "center",
    marginTop: 4,
  },
  errorText: {
    color: colors["red--500"],
    fontFamily: fonts.medium,
    fontSize: 14,
    textAlign: "center",
  },
  form: {
    gap: 24,
  },
  tokenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    paddingHorizontal: 0,
  },
  tokenInput: {
    flex: 1,
    height: 52,
    backgroundColor: "rgba(28, 41, 62, 0.4)", 
    borderWidth: 1,
    borderColor: colors["blue--600"],
    borderRadius: 8,
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.bold,
    textAlign: "center",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -8, 
    marginBottom: 8,
  },
  resendText: {
    color: colors["blue--300"],
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  resendLink: {
    color: colors["green--500"],
    fontFamily: fonts.bold,
    fontSize: 13,
  },
  buttonContainer: {
    gap: 16,
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