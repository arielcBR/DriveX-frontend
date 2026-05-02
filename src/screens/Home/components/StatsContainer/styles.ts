import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 8,
  },
  smallCard: {
    flex: 1,
    backgroundColor: colors['blue--700'],
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors['blue--600'],
  },
  smallCardIcon: {
    marginBottom: 8,
  },
  smallCardValue: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 16,
    marginBottom: 4,
  },
  smallCardLabel: {
    color: colors['blue--300'],
    fontFamily: fonts.regular,
    fontSize: 12,
  },
});
