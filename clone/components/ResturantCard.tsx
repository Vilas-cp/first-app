import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline'
import { uriFor } from '../sanity';
import { useRouter } from 'expo-router';

const ResturantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}: {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    long: number;
    lat: number;
}) => {
    const router = useRouter();
  return (
    <TouchableOpacity className='bg-white mr-3 shadow '
    onPress={() => {
        router.push({
          pathname: '/resto',
          params: {
            id,
            imgUrl: uriFor(imgUrl).url(),
            title,
            rating,
            genre,
            address,
            short_description,
            dishes: JSON.stringify(dishes),
            long,
            lat,
          },
        });
      }}
    >
     <Image source={{uri: uriFor(imgUrl).url()}} className="h-36 w-64 rounded-sm"/>
     <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{rating}</Text> .{genre} 
            </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
            <MapPinIcon color="gray" opacity={0.4} size={22}/>
            <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
     </View>
    </TouchableOpacity>
  )
}

export default ResturantCard