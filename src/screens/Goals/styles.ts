import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 24,
  },
  newGoalButton: {
    backgroundColor: colors['green--400'],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  newGoalButtonText: {
    color: colors['blue--900'],
    fontFamily: fonts.bold,
    fontSize: 14,
  }
});