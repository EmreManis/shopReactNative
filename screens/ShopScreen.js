import React from "react";
import { View, FlatList} from "react-native";

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
      columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={ProductItems}
        renderItem={productItems}
        keyExtractor={(item) => item.id}
         numColumns={2}
      />
    </View>
  );
};

export default ShopScreen;
