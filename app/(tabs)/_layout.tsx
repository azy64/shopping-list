import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Icon } from 'react-native-paper';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="homeTask"
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ color }) => {
          return <Icon size={28} source="cart" color={color} />
        },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => {
            //console.log("voici la color:",color);
          return <Icon size={28} source="information" color={color} />
        },
        }}
      />
    </Tabs>
  );
}
