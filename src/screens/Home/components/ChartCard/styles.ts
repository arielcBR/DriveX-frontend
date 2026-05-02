import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: colors['blue--700'],
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors['blue--600'],
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  chartSubtitle: {
    color: colors['green--500'],
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 64,
  },
  chartColumn: {
    alignItems: 'center',
    flex: 1,
  },
  chartBarBackground: {
    height: 40,
    width: 20,
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  chartBar: {
    width: '100%',
    borderRadius: 4,
  },
  chartDayText: {
    color: colors['blue--300'],
    fontFamily: fonts.regular,
    fontSize: 12,
  },
});
