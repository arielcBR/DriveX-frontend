import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { appFonts } from "@/constants/fonts";

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
