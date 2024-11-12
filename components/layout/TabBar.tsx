import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  View,
  OpaqueColorValue,
  Dimensions,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Href, Link, router } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouteInfo } from "expo-router/build/hooks";
import { TextStyle } from "@/assets/style";

const tabs_link: {
  pathname: Href<string>;
  icon: (color: OpaqueColorValue | string) => JSX.Element;
  name: "Dashboard" | "Home" | "Transaction";
}[] = [
  {
    pathname: "/dashboard",
    icon: (color) => <MaterialIcons name="dashboard" size={24} color={color} />,
    name: "Dashboard",
  },
  {
    pathname: "/",
    icon: (color) => <Octicons name="home" size={24} color={color} />,
    name: "Home",
  },
  {
    pathname: "/transaction",
    icon: (color) => <AntDesign name="form" size={24} color={color} />,
    name: "Transaction",
  },
];

export default function TabBar(props: BottomTabBarProps) {
  const { pathname } = useRouteInfo();

  // console.log(segments);
  return (
    <View
      className={`flex flex-row gap-2 justify-around items-center shadow-md  py-4 rounded-full w-[90vw] absolute bottom-2 bg-white -translate-x-1/2 left-1/2`}
    >
      {tabs_link.map((tab) => (
        <TouchableOpacity
          key={tab.pathname as string}
          className="flex flex-col justify-center items-center gap-1"
          onPress={() => router.replace(tab.pathname)}
        >
          <View>
            {tab.icon(tab.pathname != pathname ? "#20665c" : "#66bb6a")}
          </View>
          <Text style={TextStyle.small}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
