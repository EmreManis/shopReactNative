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

const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg";

const cartHandler = () => {
  console.log(windowWidth + " height" + windowHeight);
};
const detailHandler = () => {
  console.log("detailHandler clicked");
};
const ProductItem = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={.9} onPress={detailHandler} >
        <View style={styles.containerItems}>
          <Image style={styles.imageSize} source={{ uri: image }} />
          <Text style={styles.title}>Title</Text>
          <View style={styles.cartContainer}>
            <Text>Price</Text>
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
    backgroundColor:"#f7f7f7",
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: .3,
  },
  imageSize: {
    width: "100%",
    height: "70%",
  },
  title: {
    fontSize: 20,
    fontWeight:"bold",
    margin: 16
  },
  containerItems: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  cartContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ProductItem;
