import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
   const [load,error] = useFonts({
    "dancing-bold": require("@/assets/fonts/static/DancingScript-Bold.ttf"),
    "josefin-sans": require("@/assets/fonts/josefin-sans/static/JosefinSans-Bold.ttf"),
        
    });
    useEffect(()=>{
      //console.log("fonts:",load,error);
    })

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
