import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
    fontStyle: "italic",
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
    marginBottom: 16,
  },
  avatarText: {
    color: colors['blue--900'],
    fontFamily: fonts.bold,
    fontSize: 28,
  },
  userName: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  formSection: {
    gap: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    color: colors['blue--300'],
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors['blue--700'],
    marginBottom: 24,
  },
  footer: {
    gap: 16,
    marginTop: 8,
  },
  dangerOutlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors['red--400'],
    backgroundColor: 'transparent',
  },
  dangerOutlineText: {
    color: colors['red--400'],
    fontFamily: fonts.bold,
    fontSize: 14,
  }
});