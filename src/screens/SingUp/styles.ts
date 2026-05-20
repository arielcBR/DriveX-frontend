import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 12,
    marginBottom: 16,
  },
  header: {
    alignItems: "center",
  },
  form: {
    gap: 16,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
    marginBottom: 0,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -4, 
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors["blue--600"],
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxActive: {
    backgroundColor: colors["green--500"],
    borderColor: colors["green--500"],
  },
  checkboxText: {
    color: colors["blue--300"],
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  forgotPasswordText: {
    color: colors["green--500"],
    fontFamily: fonts.bold,
    fontSize: 13,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors["blue--600"],
    opacity: 0.5,
  },
  separatorText: {
    color: colors["blue--300"],
    marginHorizontal: 16,
    fontFamily: fonts.medium,
    fontSize: 14,
    textTransform: "uppercase",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    gap: 6,
  },
  footerText: {
    color: colors["blue--300"],
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  footerLink: {
    color: colors["green--500"],
    fontFamily: fonts.bold,
    fontSize: 14,
  },
});