import Button from "@/components/button/Button";
import Container from "@/components/structure/Container";
import React from "react";
import { Text, View } from "react-native";

type Props = {};

export default function Dashboard({}: Props) {
  console.log("dashboard");
  return (
    <Container>
      <Text>Dashboard</Text>

    </Container>
  );
}
