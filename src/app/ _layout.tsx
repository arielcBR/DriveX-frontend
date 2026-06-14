import { appFonts } from "@/constants/fonts";
import { AuthProvider } from "@/contexts/authContexts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts(appFonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}