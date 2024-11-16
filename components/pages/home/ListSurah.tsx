import CustomText from "@/components/layout/CustomText";
import { Image } from "expo-image";
import { View } from "react-native";
// @ts-ignore
import border from "@/assets/images/border.png";
import { SURAH } from "@/constant";
import { useCallback, useMemo } from "react";
import { FlashList } from "@shopify/flash-list";
import { SurahType } from "@/types";

export default function ListSurah() {
  const surahs = useMemo(() => SURAH, []);

  const renderItem = useCallback(
    ({ item: surah, index }: { item: SurahType; index: number }) => {
      console.log(index, surah.englishName);
      return (
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
      );
    },
    []
  );

  return (
    <View className="p-2 rounded-lg w-[95vw] h-[39vh] mt-5 mx-auto shadow-m overflow-hidden relative">
      <FlashList
        className="flex-1"
        estimatedItemSize={15}
        data={surahs}
        keyExtractor={(surah) => surah.englishName}
        renderItem={renderItem}
      />
    </View>
  );
}
