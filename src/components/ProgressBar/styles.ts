import { StyleSheet } from 'react-native';
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 6,
    backgroundColor: colors['blue--700'],
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 3,
  },
});