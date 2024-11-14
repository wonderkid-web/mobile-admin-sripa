import { View, Text } from "react-native";
import React from "react";
import CustomText from "@/components/layout/CustomText";

export default function HomeHeader() {
  return (
    <View className="p-8">
      <CustomText text={"Assallamu'alaikum"} style="large" />
    <CustomText text="Selamat Datang.." color="secondary" style="medium" />
    </View>
  );
}
