import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
        alignItems: "center",

        backgroundColor: "#111827",
        borderRadius: 20,
        padding: 16,
        gap: 8,
     },
    label: {
        flexDirection: "row",
        color: colors["blue--300"],
        fontSize: 16,
      },

});