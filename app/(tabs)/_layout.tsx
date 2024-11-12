import { Tabs } from "expo-router";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Text, View } from "react-native";
import TabBar from "@/components/layout/TabBar";
// import MyTabBar from "@/components/layout/TabBar";

export default function LayoutTabs() {
  return (
    <Tabs
      tabBar={(prop) => <TabBar {...prop} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => (
          //   <MaterialIcons name="dashboard" size={24} color={color} />
          // ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaksi",

          // tabBarIcon: ({ color }) => (
          //   <Octicons name="arrow-switch" size={24} color={color} />
          // ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          // tabBarIcon: ({ color }) => (
          //   <AntDesign name="form" size={24} color={color} />
          // ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
