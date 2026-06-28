import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 24,
    marginBottom: 12,
  },
  vehicleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#132338",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1E334D",
  },
  vehicleIconContainer: {
    backgroundColor: "#84CC16",
    padding: 10,
    borderRadius: 8,
    marginRight: 16,
  },
  vehicleInfo: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  vehicleDetails: {
    fontSize: 12,
    color: "#74839D",
    marginTop: 4,
  },
  healthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  healthCard: {
    flex: 1,
    backgroundColor: "#132338",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
  },
  healthCardPreventive: {
    borderColor: "#84CC16",
  },
  healthCardCorrective: {
    borderColor: "#EF4444",
  },
  healthCardAvg: {
    borderColor: "#3B82F6",
  },
  healthValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  healthValuePreventive: {
    color: "#84CC16",
  },
  healthValueCorrective: {
    color: "#EF4444",
  },
  healthValueAvg: {
    color: "#3B82F6",
  },
  healthLabel: {
    fontSize: 10,
    marginTop: 4,
  },
  healthLabelPreventive: {
    color: "#84CC16",
  },
  healthLabelCorrective: {
    color: "#EF4444",
  },
  healthLabelAvg: {
    color: "#3B82F6",
  },
  mileageCard: {
    backgroundColor: "#132338",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1E334D",
    padding: 16,
  },
  mileageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mileageLabel: {
    fontSize: 12,
    color: "#74839D",
  },
  mileageValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 4,
  },
  mileageUpdateValue: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 4,
    textAlign: "right",
  },
  mileageButtonContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  historyCard: {
    backgroundColor: "#132338",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1E334D",
    padding: 16,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  historyIndicator: {
    width: 3,
    height: "100%",
    borderRadius: 2,
    marginRight: 12,
  },
  historyIndicatorDanger: {
    backgroundColor: "#EF4444",
  },
  historyIndicatorWarning: {
    backgroundColor: "#F59E0B",
  },
  historyIndicatorInfo: {
    backgroundColor: "#3B82F6",
  },
  historyContent: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  historyDetails: {
    fontSize: 12,
    color: "#74839D",
    marginTop: 4,
  },
  historyKm: {
    fontSize: 12,
    fontWeight: "bold",
  },
  historyKmDanger: {
    color: "#EF4444",
  },
  historyKmWarning: {
    color: "#F59E0B",
  },
  historyKmInfo: {
    color: "#3B82F6",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    gap: 16,
  },
  paginationText: {
    fontSize: 12,
    color: "#74839D",
  },
  paginationButton: {
    backgroundColor: "#1E334D",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  footerButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 32,
  },
  outlineButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#84CC16",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  outlineButtonText: {
    color: "#84CC16",
    fontSize: 12,
    fontWeight: "bold",
  },
});