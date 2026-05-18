import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        height: 52,
        width: "100%",
        backgroundColor: colors["blue--700"],
        borderWidth: 1,
        borderColor: colors["blue--600"],
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    text: {
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: 14,
    }
});
