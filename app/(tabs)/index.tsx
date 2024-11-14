import { TextStyle } from "@/assets/style";
import Container from "@/components/structure/Container";
import React from "react";
import { Text, View } from "react-native";
import RoundedSection from "@/components/pages/home/GreenRoundedSection";
import SingleTimeSection from "@/components/pages/home/SingleTimeSection";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { marginPattern } from "@/constant";
import { Image } from "expo-image";
// @ts-ignore
import pattern from "@/assets/images/pattern.png";
import { blurhash } from "@/constant";

export default function index() {
  return (
    <Container>
      <View className="p-8">
        <Text style={TextStyle.large}>{"Assallamu'alaikum"}</Text>
        <Text style={TextStyle.medium}>Selamat Datang..</Text>
      </View>

      <BottomSheet
        backgroundStyle={{
          backgroundColor: "#20665c",
          borderCurve:"continuous"
        }}
        handleIndicatorStyle={{
          backgroundColor: "white"
        }}
        snapPoints={["23%", "82%"]}
      >
        <BottomSheetView className="flex-1 relative">
          <SingleTimeSection />
          <RoundedSection />
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
}
