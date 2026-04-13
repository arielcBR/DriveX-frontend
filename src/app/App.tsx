import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { appFonts } from "../constants/fonts";

import { RegisterVehicle } from "./RegisterVehicle";

export function App() {
  const [fontsLoaded] = useFonts(appFonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return <RegisterVehicle />;
}