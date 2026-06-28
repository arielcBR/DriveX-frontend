import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: colors["blue--700"],
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  closeBtnIcon: {
    position: "absolute",
    right: 16,
    top: 16,
    padding: 8,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 24,
    gap: 8,
  },
  typeButton: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors["blue--500"],
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  typeButtonActive: {
    backgroundColor: colors["green--500"],
    borderColor: colors["green--500"],
  },
  typeText: {
    color: colors["blue--300"],
    fontSize: 10,
    marginTop: 8,
    fontFamily: fonts.medium,
  },
  typeTextActive: {
    color: colors["blue--900"],
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors["blue--700"],
    borderRadius: 8,
    width: "100%",
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors["blue--500"],
  },
  textAreaContainer: {
    height: 100,
    alignItems: "flex-start",
    paddingTop: 12,
  },
  textInput: {
    flex: 1,
    color: colors.white,
    fontSize: 14,
  },
  currencyText: {
    color: "#FF5B5B",
    fontSize: 16,
    fontFamily: fonts.bold,
    marginRight: 8,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
  labelText: {
    color: colors["green--500"],
    fontSize: 12,
  },
  dateInput: {
    color: colors["blue--300"],
    fontSize: 12,
  },
  confirmBtn: {
    backgroundColor: colors["green--500"],
    width: "100%",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  confirmBtnText: {
    color: colors["blue--900"],
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  errorText: {
    color: "#FF5B5B",
    fontSize: 12,
    fontFamily: fonts.medium,
    textAlign: "center",
    marginTop: 8,
  },
});