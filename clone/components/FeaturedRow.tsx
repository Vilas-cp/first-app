import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import Sanityclient from "../sanity";

const FeaturedRow = ({
  title,

  id,
  short_description,
}: {
  title: string;

  id: string;
  short_description: any;
  restaurants: any;
}) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    Sanityclient
      .fetch(
        `*[_type == 'featured' && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  },[]);
  console.log(restaurants);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{short_description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* ResturantCards */}
        {restaurants.map((restaurant: any) => (
          <ResturantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          title={restaurant.name}
          rating={restaurant.rating}
          genre={restaurant.type?.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          lat={restaurant.lat}
          long={restaurant.long}
        />
        ))}
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
