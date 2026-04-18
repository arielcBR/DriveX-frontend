import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
        gap: 8,
    },
    statCardsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    column: {
        gap: 16,
        justifyContent: "space-between",
        width: "48%",
    },
    buttonText: {
        fontWeight: "bold",   
        color: "#000",
    },
});