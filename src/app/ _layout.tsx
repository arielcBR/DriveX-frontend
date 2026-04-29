import { appFonts } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts(appFonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
