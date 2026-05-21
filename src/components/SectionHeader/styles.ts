import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.white,
  },
  badge: {
    backgroundColor: "rgba(163, 230, 53, 0.1)", 
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors["green--500"],
  },
  badgeText: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: colors["green--500"],
    textTransform: "lowercase",
  },
});