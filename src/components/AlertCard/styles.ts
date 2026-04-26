import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors["gray--900"],
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors["yellow--700"],
    marginVertical: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors["orange--500"],
  },
  content: {
    gap: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLabel: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors["white"],
  },
  itemValueBase: {
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  valueWarning: {
    color: colors["orange--500"],
  },
  valueDanger: {
    color: colors["red--500"],
  },
});