import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 20
    // alignContent: "center",
    // width: "100%"
  },
  form:{
    gap: 16,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
    marginBottom: 16
  },
  subtitle: {
    color: colors['blue--300'],
    fontFamily: fonts.bold,
    fontSize: 13,
    textTransform: "uppercase",
  },
  containerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  }
});
