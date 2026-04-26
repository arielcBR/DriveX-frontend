import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        gap: 6,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: colors["blue--600"],
    },
    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    headerText: {
        color: colors["blue--300"],
        textTransform: "capitalize",
    },
    dot: {
        borderRadius: 4,
        width: 8,
        height: 8,
    },
    redBg: {
        backgroundColor: colors["red--400"],
    },
    greenBg: {
        backgroundColor: colors["green--500"],
    },
    redColor: {
        color: colors["red--400"],
    },
    greenColor: {
        color: colors["green--500"],
    },
    amount: {
        color: colors["green--500"],
        fontWeight: "bold",
        fontSize: 24,
    },
    footerText: {
        color: colors["blue--300"],
        fontSize: 12,
    }
});
