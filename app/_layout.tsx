import { Stack } from "expo-router";
import "@/assets/style/index.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";


SplashScreen.preventAutoHideAsync();

const client = new QueryClient();

function RootLayout() {
  const [loaded, error] = useFonts({
    TajawalLight: require("../assets/fonts/Tajawal-Light.ttf"),
    TajawalRegular: require("../assets/fonts/Tajawal-Regular.ttf"),
    TajawalBold: require("../assets/fonts/Tajawal-Bold.ttf"),
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
    <QueryClientProvider client={client}>
      <GestureHandlerRootView  className="flex-1 bg-red-200">

        <Stack
          screenOptions={{
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default RootLayout;
