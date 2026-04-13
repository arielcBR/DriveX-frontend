import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2C46B1",
        borderRadius: 8,
        height: 48,
        width: "100%"
    },
    text: {
        fontFamily: fonts.bold,
        fontSize: 14,
        fontWeight: 600,
    }, 
    primary: {
        color: colors['blue--900'],
        backgroundColor: colors['green--500'],
    },
    danger: {
        color: colors['red--100'],
        backgroundColor: colors['red--500'],
    },
});