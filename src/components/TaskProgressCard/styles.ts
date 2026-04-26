import { StyleSheet } from 'react-native';
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  textGroup: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
  subTitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors['blue--300'],
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  statusText: {
    fontFamily: fonts.medium,
    fontSize: 10,
  },
  footer: {
    marginTop: 10,
  }
});