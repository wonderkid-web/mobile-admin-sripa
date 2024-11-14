import CustomText from "@/components/layout/CustomText";
import { Image } from "expo-image";
import { View, ScrollView } from "react-native";
// @ts-ignore
import border from "@/assets/images/border.png";
import { SURAH } from "@/constant";

export default function ListSurah() {
  return (
    <View className="p-2 rounded-lg w-[85vw] h-1/3 mt-8  mx-auto shadow-m overflow-hidden relative">
      <ScrollView>
        {SURAH.map((surah) => (
          <View
            key={surah.englishName}
            className="flex flex-row mt-4 border-b-[1px] border-slate-200 pb-4"
          >
            <View className="size-12 relative">
              <Image
                className="w-full"
                style={{ flex: 1 }}
                source={border}
                contentFit="cover"
              />
              <CustomText
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold"
                text={surah.number.toString()}
                style="small"
              />
            </View>
            <View className="flex ml-4">
              <CustomText text={surah.englishName} style="extraMediumBold" />
              <CustomText
                text={surah.revelationType}
                style="small"
                color="secondary"
              />
            </View>
            <CustomText
              text={surah.name}
              style="arab"
              className="self-center justify-self-end right-1 absolute text-xl"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
