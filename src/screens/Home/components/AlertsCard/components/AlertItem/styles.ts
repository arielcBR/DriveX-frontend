import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  alertLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  dotHigh: { 
    backgroundColor: colors['red--400'],
  },
  badgeBgHigh: { 
    backgroundColor: colors['red--400'] + '20', 
  }, 
  badgeTextHigh: { 
    color: colors['red--400'],
  },
  dotMedium: { 
    backgroundColor: colors['orange--500'],
  },
  badgeBgMedium: { 
    backgroundColor: colors['orange--500'] + '20', 
  },
  badgeTextMedium: { 
    color: colors['orange--500'],
  },
});