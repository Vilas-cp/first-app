import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { uriFor } from "@/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({
  id,
  imgUrl,
  name,
  description,
  price,
}: {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
}) => {
  const formattedCurrency = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-500">{description}</Text>
            <Text className="text-gray-400 mt-2">{formattedCurrency}</Text>
          </View>
          <View>
            <Image
              source={{ uri: uriFor(imgUrl).url() }}
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              className="h-20 w-20 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 gap-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon size={40} color="#00CCBB"/>
              </TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity>
                <PlusCircleIcon size={40} color="#00CCBB" />
             
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
