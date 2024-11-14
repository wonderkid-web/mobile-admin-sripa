import { Href } from "expo-router";
import { OpaqueColorValue } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export const marginPattern = ["", "-mt-8", "-mt-16", "-mt-16"];

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const tabs_link: {
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
