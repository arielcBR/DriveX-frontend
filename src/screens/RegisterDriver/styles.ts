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
