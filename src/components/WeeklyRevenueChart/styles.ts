import { StyleSheet } from 'react-native';
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors['blue--900'],
    padding: 16,
    borderRadius: 16,
    marginVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors['blue--300'],
  },
  period: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors['blue--500'],
  },
  chartArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  barGroup: {
    alignItems: 'center',
    gap: 8,
  },
  barLabel: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors['blue--500'],
  },
  labelActive: {
    color: colors['green--500'],
  }
});