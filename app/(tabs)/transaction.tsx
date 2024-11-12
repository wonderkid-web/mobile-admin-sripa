import Container from "@/components/structure/Container";
import { useRouteInfo } from "expo-router/build/hooks";
import React from "react";
import { Text } from "react-native";

export default function Transaction() {
  console.log('transaction')
  return (
    <Container>
      <Text>Transaction</Text>
    </Container>
  );
}
