import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        gap: 4
    },
    title: {
        color: colors[`white`],
        fontFamily: fonts.regular,
        fontSize: 36,
    },
    subtitle: {
        color: colors[`blue--300`],
        fontFamily: fonts.regular,
        fontSize: 15,
    },
});