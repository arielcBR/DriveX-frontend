import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: colors["blue--700"],
    borderRadius: 16,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: colors["blue--700"],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  closeBtnIcon: {
    backgroundColor: colors["blue--700"],
    padding: 4,
    borderRadius: 6,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    color: colors["blue--300"],
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors["blue--700"],
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    gap: 8,
    borderWidth: 1,
    borderColor: colors["blue--600"],
  },
  textInput: {
    flex: 1,
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  typeBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["blue--900"],
    borderRadius: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors["blue--700"],
    gap: 6,
  },
  typeBtnFinanceActive: {
    borderColor: colors["green--500"],
  },
  typeBtnCostActive: {
    borderColor: "#FF5B5B",
  },
  typeBtnTitle: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.bold,
  },
  typeBtnSubtitle: {
    color: colors["blue--300"],
    fontSize: 10,
    fontFamily: fonts.regular,
  },
  periodContainer: {
    flexDirection: "row",
    backgroundColor: colors["blue--900"],
    borderRadius: 8,
    padding: 4,
  },
  periodBtn: {
    flex: 1,
    paddingVertical: 6,
    alignItems: "center",
    borderRadius: 6,
  },
  periodBtnActive: {
    backgroundColor: colors["blue--500"],
  },
  periodText: {
    color: colors["blue--300"],
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  periodTextActive: {
    color: colors.white,
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: colors["blue--700"],
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  cancelBtnText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  createBtn: {
    flex: 1,
    backgroundColor: colors["green--500"],
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  createBtnText: {
    color: colors["blue--900"],
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  errorText: {
    color: "#FF5B5B",
    fontSize: 12,
    fontFamily: fonts.medium,
    textAlign: "center",
  },
  successText: {
    color: colors["green--500"],
    fontSize: 12,
    fontFamily: fonts.medium,
    textAlign: "center",
  },
});