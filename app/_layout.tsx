import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import config from '../tamagui.config';
import { AuthProvider } from '@/context/auth-context';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
          </Stack>
      </AuthProvider>
        </SafeAreaProvider>
    </TamaguiProvider>
  );
}