import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView >
      <View className="">
        <View className="flex-row items-center pb-3 space-x-2 mx-4 ">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-7 h-7 bg-gray-300 rounded-full "
          
          />
          <View className="ml-4 ">
            <Text className="font-bold text-gray-500 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
