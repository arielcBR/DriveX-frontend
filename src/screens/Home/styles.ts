import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['blue--900'],
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 16,
    paddingTop: 8,
  },
  greetingText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
    marginBottom: 16,
  },
  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors['green--500'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors['blue--900'],
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors['blue--700'],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors['orange--500'],
    zIndex: 1,
  },
  // EarningsCard styles
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
  mainCardFooterValue: {
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  // StatsContainer styles
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
  // ChartCard styles
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
  // AlertsCard styles
  alertsCard: {
    backgroundColor: colors['blue--700'],
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors['red--400'],
    flex: 1,
  },
  alertsTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
    marginBottom: 12,
  },
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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