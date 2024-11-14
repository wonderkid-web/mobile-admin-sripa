import { View, Text, FlatList } from "react-native";
import { TextStyle } from "@/assets/style";
import { useQuery } from "@tanstack/react-query";
import { getTime } from "@/helper";

export default function GroupTimeSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["time"],
    queryFn: getTime,
  });

  if (isLoading) {
    return (
      <View className="z-20 bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="z-20">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (data)
    return (

        
        <View className="flex-row flex-wrap justify-center gap-4 w-full top-24 z-20">
          {data.map(({ time, name }) => (
            <View
              className="bg-white w-[45%] h-fit rounded-md flex justify-center items-center py-2 shadow-md"
              key={name}
            >
              <Text style={TextStyle.large}>{time}</Text>
              <Text style={TextStyle.paragraph}>{name}</Text>
            </View>
          ))}
        </View>

    );
}
