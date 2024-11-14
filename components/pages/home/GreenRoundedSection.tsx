import { View } from "react-native";
import Pattern from "./Pattern";
import GroupTimeSection from "./GroupTimeSection";

export default function RoundedSection() {
  return (
    <View className="bg-primary h-full">
      <GroupTimeSection />
      <Pattern />
    </View>
  );
}
