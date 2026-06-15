import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors["blue--300"],
  },
  rightText: {
    fontFamily: fonts.bold,
    fontSize: 12,
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pillText: {
    fontFamily: fonts.medium,
    fontSize: 12,
  },
});
