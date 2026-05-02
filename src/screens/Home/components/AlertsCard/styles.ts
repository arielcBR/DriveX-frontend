import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  alertsCard: {
    backgroundColor: colors['blue--700'],
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: colors['red--400'],
    flex: 1,
  },
  alertsTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
    marginBottom: 12,
  },
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  alertLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  alertItemTitle: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  alertBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  alertBadgeText: {
    fontFamily: fonts.medium,
    fontSize: 12,
  },
});
