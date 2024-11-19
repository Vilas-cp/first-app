import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "expo-router";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Category from "@/components/Category";
import FeaturedRow from "@/components/FeaturedRow";

import client from "../sanity";


const index = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<any[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == 'featured']{
          ...,
          restaurants[]->{
            ...,dishes[]->
          }
        }
        `
      )
      .then((data) => {
   
        setFeaturedCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });
  }, []);


  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center pb-3 space-x-2 mx-1 px-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 bg-gray-300 rounded-full "
        />
        <View className="ml-2 flex-1">
          <Text className="font-bold text-gray-500 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={15} color="#000000" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center mx-1 space-x-2 pb-2 px-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3 ">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Catogories */}
        <Category />
        {featuredCategories?.map((category) => (
          <FeaturedRow
          title={category.name}
          id={category._id}
          key={category._id}
          short_description={category.short_description}
          restaurants={category.restaurants}
          
        />
        ))}
        
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
