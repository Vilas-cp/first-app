import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Sanityclient from "../sanity";
import { uriFor } from '../sanity';

const Category = () => {
  const [category,SetCategory]=useState([]);
  useEffect(() => {
    Sanityclient.fetch(`
    *[_type == "category"]{
      ...,
    }`)
    .then((data)=>{
      SetCategory(data);
    })
  })
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {category.map((category:any) => (
        <CategoryCard key={category._id} imgUrl={uriFor(category.image).width(200).url()} title={category.name}/>
      ))}
      
      
    </ScrollView>
  );
};

export default Category;
