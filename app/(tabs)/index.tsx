import Container from "@/components/structure/Container";
import React from "react";
import ListSurah from "@/components/pages/home/ListSurah";
import GreetingSection from "@/components/pages/home/GreetingSection";
import HomeSheet from "@/components/pages/home/HomeSheet";
import HomeHeader from "@/components/pages/home/HomeHeader";

export default function index() {
  console.log('index')

  return (
    <Container>
      <HomeHeader />
      <GreetingSection />
      <ListSurah />
      <HomeSheet />
    </Container>
  );
}
