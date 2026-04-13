import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 20,
        backgroundColor: colors["blue--700"],
        height: 100,
        width: 100
    },
    icon: {
        color: colors["green--500"],
    }
});