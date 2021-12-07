import React from "react";
import { View, FlatList, Image } from "react-native";

import ProductItem from "../components/ProductItem";
import { ProductItems } from "../data/dummy-data";

const productItems = (itemData) => {
  return (
    <ProductItem title={itemData.item.title} image={itemData.item.image} price={itemData.item.price} />
  );
};

const ShopScreen = () => {
  return (
    <View>    
      <FlatList
        data={ProductItems}
        renderItem={productItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ShopScreen;
