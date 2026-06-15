import { colors, fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    width: "100%", 
    gap: 12 
  },
  sectionHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },
  sectionTitle: { 
    color: colors.white, 
    fontFamily: fonts.bold, 
    fontSize: 18 
  },
  addBtn: { 
    backgroundColor: colors["blue--700"], 
    paddingVertical: 4, 
    paddingHorizontal: 12, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: colors["blue--500"] 
  },
  addBtnText: { 
    color: colors.white, 
    fontSize: 12, 
    fontFamily: fonts.medium 
  },
  goalsList: { 
    gap: 10 
  },
  card: { 
    backgroundColor: colors["blue--700"], 
    padding: 12, 
    borderRadius: 12, 
    gap: 8 
  },
  cardHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10 
  },
  cardTextContent: { 
    flex: 1 
  },
  cardTitle: { 
    color: colors.white, 
    fontFamily: fonts.bold, 
    fontSize: 14 
  },
  cardSubtitle: { 
    color: colors["blue--300"], 
    fontSize: 10 
  },
  progressContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10 
  },
  progressBarBg: { 
    flex: 1, 
    height: 6, 
    backgroundColor: colors["blue--700"], 
    borderRadius: 3, 
    overflow: "hidden" 
  },
  progressBarFill: { 
    height: "100%", 
    borderRadius: 3 
  },
  progressText: { 
    fontSize: 12, 
    fontFamily: fonts.bold, 
    width: 35, 
    textAlign: "right" 
  },
  cardFooter: { 
    alignItems: "flex-start" 
  },
  footerText: { 
    color: colors["blue--300"], 
    fontSize: 10 
  },
  pagination: { 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 15, 
    marginTop: 4 
  },
  pageAction: { 
    color: colors["blue--500"], 
    fontSize: 12, 
    fontFamily: fonts.medium 
  },
  pageInfo: { 
    color: colors.white, 
    fontSize: 12 
  },
});