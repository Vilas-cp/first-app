import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  selectBasketItems,
  selectBasketItemsWithId,
  selectBasketTotal,
} from "@/features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "expo-router";

const BaskIcon = () => {
    const basketTotal = useSelector(selectBasketTotal);
    const formattedCurrency = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(basketTotal);
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  
  return (
    <View className="absolute bottom-10 w-full z-50">
<TouchableOpacity onPress={() => navigation.navigate("basket" as never)} className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
      <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
      <Text className="text-white font-extrabold flex-1 text-center text-lg">View Basket</Text>
      <Text className="font-extrabold text-lg text-white">
        {formattedCurrency}
      </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BaskIcon;
