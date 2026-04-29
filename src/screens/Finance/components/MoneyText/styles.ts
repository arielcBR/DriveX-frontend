import { StyleSheet } from "react-native";
import { colors, fonts } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {

    },
    amount: {
        flexDirection: "row",
        color: colors["green--500"],
      },
      
      currency: {
        fontSize: 18,
        fontWeight: "600",
      },
      
      integer: {
        fontSize: 38,
        fontWeight: "bold",
      },
      
      decimal: {
        fontSize: 18,
        fontWeight: "700",
      }
});