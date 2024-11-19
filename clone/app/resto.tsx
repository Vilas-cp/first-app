import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useNavigation, Route } from "expo-router";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { uriFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "@/components/Dishrow";



const Resto = () => {
 
  
  const searchParams = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(searchParams);
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes: dishesString,
    long,
    lat,
  }= searchParams;
  const dishes = (typeof dishesString === 'string') ? JSON.parse(dishesString as string) : [];



  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: uriFor(imgUrl).url() }}
          className="h-56 w-full bg-gray-300 "
        />

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>·{genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1 ml-2">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center w-full space-x-5 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color={"#00CCBB"} size={20} />
        </TouchableOpacity>
        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((dish:any) => (
            
            
  <DishRow
    key={dish._id}
    id={dish._id}
    price={dish.price}
    name={dish.name}
    imgUrl={dish.image}
    description={dish.short_description}
  />
))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Resto;
