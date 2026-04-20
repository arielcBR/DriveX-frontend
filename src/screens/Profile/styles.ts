import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
  editButton: {
    color: colors['blue--300'],
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors['green--400'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors['blue--900'],
    fontFamily: fonts.bold,
    fontSize: 28,
  },
  card: {
    backgroundColor: colors['blue--700'],
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    color: colors['blue--300'],
    fontFamily: fonts.bold,
    fontSize: 13,
    marginBottom: 16,
  },
  infoRow: {
    marginBottom: 12,
  },
  label: {
    color: colors['blue--300'],
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  value: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
    marginTop: 2,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  switchLabel: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preferenceValue: {
    color: colors['blue--300'],
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 16,
  }
});