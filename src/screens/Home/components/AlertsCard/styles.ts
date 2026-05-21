import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "@/constants/theme";

const { width } = Dimensions.get('window');
export const SLIDER_WIDTH = width - 64; 

export const styles = StyleSheet.create({
  alertsCard: {
    backgroundColor: colors['blue--700'],
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: colors['red--400'],
    flex: 1,
    overflow: 'hidden',
  },
  alertsTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
    marginBottom: 12,
  },
  slideContainer: {
    width: SLIDER_WIDTH,
    gap: 12,
  },
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
  dotAlta: { backgroundColor: colors['red--400'] },
  badgeBgAlta: { backgroundColor: colors['red--400'] + '20' }, 
  badgeTextAlta: { color: colors['red--400'] },
  
  dotMedia: { backgroundColor: colors['orange--500'] },
  badgeBgMedia: { backgroundColor: colors['orange--500'] + '20' },
  badgeTextMedia: { color: colors['orange--500'] },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 6, 
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  paginationDotActive: {
    backgroundColor: colors['green--500'],
    width: 16, 
  },
  paginationDotInactive: {
    backgroundColor: colors['blue--300'] + '50', 
  },  
});