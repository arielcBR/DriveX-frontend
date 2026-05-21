import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(163, 230, 53, 0.05)", 
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(163, 230, 53, 0.2)",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  progressInfo: {
    flex: 1,
  },
  progressTitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors["blue--300"],
    marginBottom: 4,
  },
  progressValue: {
    fontFamily: fonts.bold,
    fontSize: 32, 
    color: colors["green--500"],
  },
  subText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors["green--500"],
    marginTop: 4,
  },
  periodInfo: {
    alignItems: "flex-end",
  },
  periodLabel: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors["blue--300"],
  },
  periodDate: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
  daysLeft: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors["blue--300"],
  },
  progressBarContainer: {
    marginTop: 10,
  }
});