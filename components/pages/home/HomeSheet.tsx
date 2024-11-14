import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import RoundedSection from "./GreenRoundedSection";
import SingleTimeSection from "./SingleTimeSection";

export default function HomeSheet() {
  return (
    <BottomSheet
      backgroundStyle={{
        backgroundColor: "#20665c",
        borderCurve: "continuous",
      }}
      handleIndicatorStyle={{
        backgroundColor: "white",
      }}
      snapPoints={["23%", "82%"]}
    >
      <BottomSheetView className="flex-1 relative">
        <SingleTimeSection />
        <RoundedSection />
      </BottomSheetView>
    </BottomSheet>
  );
}
