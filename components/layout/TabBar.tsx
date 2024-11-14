import { View, Text, TouchableOpacity } from "react-native";
import { router, useNavigation } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";
import { TextStyle } from "@/assets/style";
import { tabs_link } from "@/constant";

export default function TabBar() {
  const { pathname } = useRouteInfo();
  

  const navigate = useNavigation()

  return (
    <View
      className={`flex flex-row gap-2 justify-around items-center shadow-md  py-4 rounded-full w-[90vw] absolute bottom-2 bg-white -translate-x-1/2 left-1/2`}
    >
      {tabs_link.map((tab) => (
        <TouchableOpacity
          key={tab.pathname as string}
          className="flex flex-col justify-center items-center gap-1"
          onPress={() => router.replace(tab.pathname)}
        >
          <View>
            {tab.icon(tab.pathname != pathname ? "#20665c" : "#66bb6a")}
          </View>
          <Text style={TextStyle.small}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
       <TouchableOpacity
          
          className="flex flex-col justify-center items-center gap-1"
          onPress={() => navigate.goBack()}
        >
          <View>

          </View>
          <Text style={TextStyle.small}>TEST</Text>
        </TouchableOpacity>
    </View>
  );
}
