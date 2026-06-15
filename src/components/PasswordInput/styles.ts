import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        gap: 8,
    },
    label: {
        color: colors["blue--300"],
        fontSize: 13,
        textTransform: "capitalize"
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors["blue--700"],
        borderWidth: 1,
        borderColor: colors["blue--600"],
        borderRadius: 10,
        padding: 8,
    },
    icon: {
        color: colors["green--400"],
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: colors["white"],
        fontFamily: fonts["medium"],
        fontSize: 16,
    },
    rightIconContainer: {
        padding: 4,
        marginLeft: 8,
    },
    rightIcon: {
        color: colors["blue--300"],
    },
    inputWrapperError: {
        borderColor: colors["red--500"],
    },
    errorText: {
        color: colors["red--500"],
        fontSize: 12,
        marginTop: 4,
    }
});
