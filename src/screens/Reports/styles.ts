import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 2,
    paddingTop: 8,
    paddingBottom: 8,
  },
  sectionsWrapper: {
    gap: 12,
    marginTop: 8,
  },
  sectionContainer: {
    gap: 12,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.white,
  },
});
