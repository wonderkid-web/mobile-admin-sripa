import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Text, OpaqueColorValue, TouchableOpacity } from "react-native";
import React from "react";
import { Href, Link, router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouteInfo } from "expo-router/build/hooks";

const tabs_link: {
  pathname: Href<string>;
  icon: (color: OpaqueColorValue | string) => JSX.Element;
}[] = [
  {
    pathname: "/dashboard",
    icon: (color) => <MaterialIcons name="dashboard" size={24} color={color} />,
  },
  {
    pathname: "/",
    icon: (color) => <Octicons name="home" size={24} color={color} />,
  },
  {
    pathname: "/transaction",
    icon: (color) => <AntDesign name="form" size={24} color={color} />,
  },
];

export default function TabBar(props: BottomTabBarProps) {
  const { pathname } = useRouteInfo();

  // console.log(segments);
  return (
    <View className="flex flex-row gap-2 justify-around items-center shadow-sm bg-white p-4 rounded-full mx-4 mb-2">
      {tabs_link.map((tab) => (
        <Link href={tab.pathname} key={tab.pathname as string}>
          {tab.icon(tab.pathname != pathname ? "#20665c" : "green")}
        </Link>
      ))}
    </View>
  );
}
