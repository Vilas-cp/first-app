import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { uriFor } from "@/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addtoBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from "../features/basketSlice";

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
  const dispatch = useDispatch();
  const items = useSelector((state)=>selectBasketItemsWithId(state,id));
  const addItemToBasket = () => {
    dispatch(addtoBasket({ id, name, description, price, imgUrl }));

  };
  console.log(items);
  
  const reMoveItemFromBasket = () => {
    if (items.length <= 0) return;
      dispatch(removeFromBasket({id}))
  }
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
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
            <TouchableOpacity onPress={reMoveItemFromBasket} disabled={items.length <= 0}>
              <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"}/>
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
