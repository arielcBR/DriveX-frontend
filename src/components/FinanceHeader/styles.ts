import { StyleSheet } from 'react-native';
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.white,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: colors['green--500'],
    borderColor: colors['green--500'],
  },
  buttonInactive: {
    backgroundColor: colors['blue--700'],
    borderColor: 'rgba(90, 127, 160, 0.2)',
  },
  filterText: {
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  textActive: {
    color: colors['gray--900'],
  },
  textInactive: {
    color: colors['blue--300'],
  },
});