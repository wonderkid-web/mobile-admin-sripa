import { Stack } from "expo-router";
import "@/assets/style";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded, error] = useFonts({
    "TajawalLight": require("../assets/fonts/Tajawal-Light.ttf"),
    "TajawalRegular": require("../assets/fonts/Tajawal-Regular.ttf"),
    "TajawalBold": require("../assets/fonts/Tajawal-Bold.ttf"),
  });

  useEffect(() => {
    if (error && loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!error && !loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;
