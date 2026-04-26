import { StyleSheet } from 'react-native';
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors['blue--300'],
  },
  viewAll: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors['green--500'],
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  details: {
    flex: 1,
    gap: 4,
  },
  description: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors['blue--300'],
  },
  date: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors['blue--500'],
  },
  amount: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  income: {
    color: colors['green--500'],
  },
  outcome: {
    color: colors['red--500'],
  },
});