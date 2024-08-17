import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Credit Card",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "credit-card" : "credit-card"} />
          ),
        }}
      />

      <Tabs.Screen
        name="send"
        options={{
          title: "Send",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "send" : "send-o"} />
          ),
        }}
      />

      <Tabs.Screen
        name="chart"
        options={{
          title: "Chart",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "bar-chart" : "bar-chart-o"} />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "ellipsis-h" : "ellipsis-h"} />
          ),
        }}
      />
    </Tabs>
  );
}
