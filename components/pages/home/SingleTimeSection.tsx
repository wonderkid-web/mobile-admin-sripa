import { View, Text } from "react-native";
import React from "react";
import { TextStyle } from "@/assets/style";
import { format } from "date-fns";

export default function SingleTimeSection() {
  return (
    <View className="bg-white w-1/2 mx-auto h-24 rounded-xl absolute left-1/4  z-10 flex justify-center items-center shadow-md border-4 border-primary">
      <Text
        style={TextStyle.extraLarge}
        className="text-primary relative top-0"
      >
        {format(new Date(), "HH:mm")}
      </Text>
      <Text className="relative bottom-3" style={TextStyle.paragraph}>
        Medan
      </Text>
    </View>
  );
}
