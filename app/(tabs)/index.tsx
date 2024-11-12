import { TextStyle } from "@/assets/style";
import Container from "@/components/structure/Container";
import { useRouteInfo } from "expo-router/build/hooks";
import React from "react";
import { Text, View } from "react-native";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function index() {
  const { segments } = useRouteInfo();

  const today = new Date();

  return (
    <Container>
      <View className="p-8">
        <Text style={TextStyle.large}>{"Assallamu'alaikum"}</Text>
        <Text style={TextStyle.medium}>Selamat Datang..</Text>
        <Text style={TextStyle.medium}>
          {format(today, "MMMM dd, yyyy HH:mm", {
            locale: id,
          })}
        </Text>
      </View>
      <View className="bg-white w-1/2 mx-auto h-24 rounded-xl mt-9st absolute left-1/4 top-60 z-10 flex justify-center items-center shadow-md">
          <Text style={TextStyle.extraLarge} className="text-primary">10: 54</Text>
      </View>
      <View className="bg-primary h-full mt-14 rounded-t-[50]"></View>
    </Container>
  );
}
