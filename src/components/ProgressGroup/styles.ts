import { StyleSheet } from 'react-native';
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
      width: '100%',
      marginVertical: 12,
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8, 
    },
    label: {
      fontFamily: fonts.bold,
      fontSize: 12,
      color: colors.white,
    },
    percent: {
      fontFamily: fonts.regular,
      fontSize: 12,
    },
});