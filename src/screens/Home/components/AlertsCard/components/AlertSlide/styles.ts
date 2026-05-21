import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const SLIDER_WIDTH = width - 64; 

export const styles = StyleSheet.create({
  slideContainer: {
    width: SLIDER_WIDTH,
    gap: 12, 
  },
});