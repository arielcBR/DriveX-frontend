import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors["blue--700"],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#233324",
    padding: 16,
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors["green--400"],
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: "#6B9B62",
  },
  body: {
    padding: 16,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    gap: 16,
  },
  divider: {
    width: 1,
    backgroundColor: colors["blue--600"],
    marginHorizontal: 16,
  },
  fieldInfo: {
    gap: 4,
  },
  fieldLabel: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors["blue--300"],
  },
  fieldValue: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
  fieldValueHighlight: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors["green--400"],
  },
  fieldValueDanger: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors["red--400"],
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tooltipContainer: {
    position: "absolute",
    bottom: 60,
    right: 16,
    left: 16,
    backgroundColor: colors["blue--900"],
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors["blue--600"],
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tooltipText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.white,
    lineHeight: 20,
  },
});
