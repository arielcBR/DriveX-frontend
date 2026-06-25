import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  textContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#74839D",
  },
  form: {
    width: "100%",
    gap: 16,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 16,
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#132338",
    borderRadius: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: "#74839D",
    fontWeight: "600",
  },
});