import { View, Text, ScrollView ,Image, TouchableOpacity} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {uriFor} from "../sanity"
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Resto = () => {
  const searchParams = useLocalSearchParams();
  const navigation = useNavigation();

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
    dishes,
    long,
    lat,
  } = searchParams;

  return (
    <ScrollView>
    <View className="relative">
      <Image source={{ uri: uriFor(imgUrl).url() }} className="h-56 w-full bg-gray-300 " />
    </View>
    <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full" onPress={() => navigation.goBack()}>
      <ArrowLeftIcon size={20} color="#00CCBB" />
    </TouchableOpacity>
  </ScrollView>
  );
};

export default Resto;
