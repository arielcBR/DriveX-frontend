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
        height: 40,
    },
    disabled: {
        opacity: 0.5,
    },
    icon: {
        color: colors["green--400"],
        marginRight: 8,
    },
    chevron: {
        color: colors["blue--300"],
        marginLeft: "auto",
    },
    input: {
        flex: 1,
        color: colors["white"],
        fontFamily: fonts["medium"],
        fontSize: 16,
    },
    placeholder: {
        color: colors["blue--500"],
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(13, 27, 42, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    modalContent: {
        width: "100%",
        maxHeight: "80%",
        backgroundColor: colors["blue--700"],
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: colors["blue--600"],
    },
    modalTitle: {
        color: colors["white"],
        fontFamily: fonts["bold"],
        fontSize: 18,
        marginBottom: 16,
        textAlign: "center",
    },
    searchInput: {
        backgroundColor: colors["blue--900"],
        color: colors["white"],
        fontFamily: fonts["medium"],
        fontSize: 14,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors["blue--600"],
    },
    optionItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    optionText: {
        color: colors["white"],
        fontFamily: fonts["medium"],
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: colors["blue--600"],
    },
    emptyText: {
        color: colors["blue--300"],
        textAlign: "center",
        padding: 16,
        fontFamily: fonts["regular"],
    }
});
