import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectRestuarant } from '@/features/restaurantSlice';

const Basket = () => {
    const navigation = useNavigation();
    const restuarant =useSelector(selectRestuarant);
   
  return (
    <View>
      <Text>Basket</Text>
    </View>
  )
}

export default Basket