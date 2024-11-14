import { Text, View } from "react-native";
// @ts-ignore
import pattern from "@/assets/images/pattern.png";
import { Image } from "expo-image";
import { marginPattern, blurhash } from "@/constant";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function Pattern() {
  return (
    <View className="flex flex-col w-full h-44 absolute -top-4">
      {marginPattern.map((margin, i) => (
        <View className={`w-full size-64 flex-row -mt-8`} key={i}>
          <Image
            className="w-full"
            style={{
              flex: 1,
            }}
            source={pattern}
            placeholder={{ blurhash }}
            contentFit="contain"
            transition={500}
          />
          <Image
            className="w-full"
            style={{
              flex: 1,
            }}
            source={pattern}
            placeholder={{ blurhash }}
            contentFit="contain"
            transition={500}
          />
        </View>
      ))}
    </View>
  );
}
