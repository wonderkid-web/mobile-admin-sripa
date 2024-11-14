import CustomText from "@/components/layout/CustomText";
import { blurhash } from "@/constant";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { View, TouchableOpacity } from "react-native";
// @ts-ignore
import corner from "@/assets/images/corner.webp";

export default function GreetingSection() {
  return (
    <View className="p-4 rounded-lg bg-primary text-white w-[85vw] h-[20vh] mx-auto shadow-m overflow-hidden relative gap-1">
      <CustomText text="History Bacaan" style="large" color="white" />
      <CustomText
        text=" Kamu belum ada membaca Surah apapun hari ini."
        style="medium"
        color="white"
      />

      <TouchableOpacity className="bg-white rounded-md justify-center items-center w-2/5 px-4 py-2 mt-2 flex-row gap-1">
        <CustomText text="cari surah" style="paragraph" />
        <MaterialIcons name="search" color={"#20665c"} size={16} />
      </TouchableOpacity>

      <View className={`size-32 flex-row -mt-8 absolute -right-2 -bottom-4`}>
        <Image
          className="w-full"
          style={{
            flex: 1,
          }}
          source={corner}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={500}
        />
      </View>
    </View>
  );
}
