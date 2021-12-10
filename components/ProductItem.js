import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const cartHandler = () => {
  console.log(windowWidth + " height" + windowHeight);
};
const detailHandler = () => {
  console.log("detailHandler clicked");
};
const ProductItem = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.9} onPress={detailHandler}>
        <View style={styles.containerItems}>
          <Image style={styles.imageSize} source={{ uri: props.image }} /> 
          <View style={styles.itemContainer}>    
            <Text style={styles.itemName}>{props.title}</Text>
            </View> 
          <View style={styles.cartContainer}>
            <Text>{props.price}</Text>
            <TouchableOpacity onPress={cartHandler}>
              <Ionicons name="cart-outline" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight * 0.4,
    width: windowWidth * 0.4,
    backgroundColor: "#f7f7f7",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 0.3,
  },
  imageSize: {
    width: "100%",
    flex:4
  },
  itemName: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    margin: 16
  },
  itemContainer: {
    flex:1.4,
    width:"100%",
    justifyContent:"flex-end"
  },
  containerItems: {
    height: "100%"
  },
  cartContainer: {
    flex:1,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ProductItem;
