import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "space-between",
    gap: 16,
  },
  infoContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors["blue--300"],
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
