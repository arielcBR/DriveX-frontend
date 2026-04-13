import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["blue--900"],
        padding: 32
    },
    scrollContent: {
        paddingHorizontal: 8, 
        paddingBottom: 40,    
        flexGrow: 1,           
    }
});