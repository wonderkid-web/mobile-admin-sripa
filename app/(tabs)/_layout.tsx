import { Tabs } from "expo-router";
import React from "react";
import TabBar from "@/components/layout/TabBar";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function LayoutTabs() {
  return (

      <Tabs tabBar={(prop) => <TabBar />}>
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
