import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    container: { width: '100%', marginTop: 24 },
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
  });