import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: colors['blue--700'],
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors['blue--600'],
  },
  mainCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mainCardTitle: {
    color: colors['blue--300'],
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  badgeSemanal: {
    backgroundColor: colors['green--500'],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeSemanalText: {
    color: colors['blue--900'],
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  mainCardValue: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 28,
    marginBottom: 16,
  },
  mainCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainCardFooterItem: {
    flex: 1,
  },
  mainCardFooterLabel: {
    color: colors['blue--300'],
    fontFamily: fonts.regular,
    fontSize: 14,
    marginBottom: 2,
  },
  mainCardFooterValueRed: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors["red--400"],
  },
  mainCardFooterValueGreen: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors["green--500"],
  },
});
