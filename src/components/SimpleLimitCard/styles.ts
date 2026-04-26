import { StyleSheet } from 'react-native';
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)', // Um leve destaque para o card
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors['blue--300'], // Cor mais suave para o nome da categoria
  },
  valueText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
});