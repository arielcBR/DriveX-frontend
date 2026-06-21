import { colors, fonts } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  panel: {
    width: width * 0.8,
    maxWidth: 350,
    height: "100%",
    backgroundColor: colors["blue--900"],
    paddingTop: 20,
    borderLeftWidth: 1,
    borderLeftColor: colors["blue--700"],
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors["blue--700"],
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.white,
  },
  closeButton: {
    padding: 4,
  },
  listContent: {
    padding: 20,
    gap: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  emptyText: {
    fontFamily: fonts.medium,
    color: colors["blue--300"],
    fontSize: 16,
    marginTop: 12,
  },
  notificationItem: {
    backgroundColor: colors["blue--700"],
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },
  notificationItemUnread: {
    borderColor: colors["green--500"],
    backgroundColor: colors["blue--600"],
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
    gap: 8,
  },
  itemTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white,
    flex: 1,
  },
  itemTime: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors["blue--200"],
  },
  itemMessage: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors["blue--200"],
    lineHeight: 20,
  },
});
