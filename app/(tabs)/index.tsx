import { TextStyle } from "@/assets/style";
import Container from "@/components/structure/Container";
import { useRouteInfo } from "expo-router/build/hooks";
import React from "react";
import { Text, View } from "react-native";

export default function index() {
  const { segments } = useRouteInfo();

  return (
    <Container>
      <View>
        <Text style={TextStyle.large}>{"Assallamu'alaikum"}</Text>
        <Text style={TextStyle.medium}>Selamat Datang..</Text>

      </View>
    </Container>
  );
}
