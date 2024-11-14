import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function index() {
  return (
    <View className="p-4 flex-1">
      <Text>index</Text>
      <Link href={"/(tabs)/"}>Go</Link>

    
    </View>
  );
}
