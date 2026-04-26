import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

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
        fontWeight: "bold",
    }, 
    primary: {
        color: colors["blue--900"],
        backgroundColor: colors["green--500"],
    },
    danger: {
        color: colors["red--100"],
        backgroundColor: colors["red--500"],
    },
});