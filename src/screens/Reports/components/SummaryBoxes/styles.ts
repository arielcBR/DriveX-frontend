import { fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  box: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161B19", 
    height: 80,
  },
  value: {
    fontFamily: fonts.bold,
    fontSize: 20,
    marginBottom: 4,
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 10,
    textAlign: "center",
  },
});
